<?php
	session_start();
	require_once '../../lib/dbcon.php';
	require_once '../../lib/func.php';
	require_once '../../lib/pagination_class.php';
	require_once '../../lib/tglindo.php';
	$mnu = 'tingkat';
	$tb  = 'aka_'.$mnu;
	// $out=array();

	if(!isset($_POST['aksi'])){
		$out=json_encode(array('status'=>'invalid_no_post'));		
		// $out=['status'=>'invalid_no_post'];		
	}else{
		switch ($_POST['aksi']) {
			// -----------------------------------------------------------------
			case 'tampil':
				$tahunajaran = trim($_POST['tahunajaranS'])?filter($_POST['tahunajaranS']):'';
				$tingkat     = trim($_POST['tingkatS'])?filter($_POST['tingkatS']):'';
				$keterangan  = trim($_POST['keteranganS'])?filter($_POST['keteranganS']):'';
				$sql = 'SELECT *
						FROM '.$tb.'
						WHERE 
							tahunajaran like "%'.$tahunajaran.'%" and
							tingkat like "%'.$tingkat.'%" and
							keterangan like "%'.$keterangan.'%"
						ORDER 
							BY urutan asc';
				// print_r($sql);exit();
				if(isset($_POST['starting'])){ //nilai awal halaman
					$starting=$_POST['starting'];
				}else{
					$starting=0;
				}
				// $menu='tampil';	
				$recpage= 5;//jumlah data per halaman
				// $obj 	= new pagination_class($menu,$sql,$starting,$recpage);
				$obj 	= new pagination_class($sql,$starting,$recpage);
				$result =$obj->result;

				#ada data
				$jum	= mysql_num_rows($result);
				$out ='';
				if($jum!=0){	
					$nox 	= $starting+1;
					while($res = mysql_fetch_array($result)){	
						if($res['aktif']=1){
							$dis  = 'disabled';
							$ico  = 'checkmark';
							$hint = 'telah Aktif';
							$func = '';
						}else{
							$dis  = '';
							$ico  = 'blocked';
							$hint = 'Aktifkan';
							$func = 'onclick="aktifkan('.$res['replid'].');"';
						}
						$btn ='<td>
									<button data-hint="ubah"  onclick="viewFR('.$res['replid'].');">
										<i class="icon-pencil on-left"></i>
									</button>
									<button data-hint="hapus" onclick="del('.$res['replid'].');">
										<i class="icon-remove on-left"></i>
									</button>
								 </td>';
						$out.= '<tr>
									<td>'.$nox.'</td>
									<td id="'.$mnu.'TD_'.$res['replid'].'">'.$res['tingkat'].'</td>
									<td>'.tgl_indo($res['keterangan']).'</td>
									'.$btn.'
								</tr>';
						$nox++;
					}
				}else{ #kosong
					$out.= '<tr align="center">
							<td  colspan=9 ><span style="color:red;text-align:center;">
							... data tidak ditemukan...</span></td></tr>';
				}
				#link paging
				$out.= '<tr class="info"><td colspan=9>'.$obj->anchors.'</td></tr>';
				$out.='<tr class="info"><td colspan=9>'.$obj->total.'</td></tr>';
			break; 
			// view -----------------------------------------------------------------

			// add / edit -----------------------------------------------------------------
			case 'simpan':
				$s = $tb.' set 	departemen 	= "'.filter($_POST['departemenH']).'",
								tahunajaran = "'.filter($_POST['tahunajaranTB']).'",
								tglmulai    = "'.filter($_POST['tglmulaiTB']).'",
								tglakhir    = "'.filter($_POST['tglakhirTB']).'",
								keterangan  = "'.filter($_POST['keteranganTB']).'"';
				
				if(!isset($_POST['replid'])){ //add
					if(mysql_num_rows(mysql_query('SELECT * from '.$tb))>0){
						$s1 ='UPDATE '.$tb.' set aktif="0" where departemen='.$_POST['departemenH'];
						$e1 = mysql_query($s1);
					}$s2 = 'INSERT INTO '.$s.' ,aktif = "1"';
				}else{ //edit
					$s2 = 'UPDATE '.$s.' WHERE replid='.$_POST['replid'];
				}

				$e2 = mysql_query($s2);
				if(!$e2){
					$stat = 'gagal menyimpan';
				}else{
					$stat = 'sukses';
				}
				$out  = json_encode(array('status'=>$stat));
			break;
			// add / edit -----------------------------------------------------------------
			
			// delete -----------------------------------------------------------------
			case 'hapus':
				// $s1 ='UPDATE '.$tb.' set aktif="0" where departemen='.$_POST['departemenH'];
				// $e1  = mysql_query($s1);
				// // var_dump($e1);exit();
				// if(!$e1){
				// 	$stat = 'gagal menonaktifkan';
				// }else{

				$d    = mysql_fetch_assoc(mysql_query('SELECT * from '.$tb.' where replid='.$_POST['replid']));
				$s    = 'DELETE from '.$tb.' WHERE replid='.$_POST['replid'];
				$e    = mysql_query($s);
				$stat = ($e)?'sukses':'gagal';
				$out  = json_encode(array('status'=>$stat,'terhapus'=>$d['tahunajaran']));
			break;
			// delete -----------------------------------------------------------------

			// ambiledit -----------------------------------------------------------------
			case 'ambiledit':
				$s 		= ' SELECT 
								t.tahunajaran,
								t.tglmulai,
								t.tglakhir,
								t.keterangan,
								d.replid as id_departemen,
								d.nama as departemen
							from '.$tb.' t, departemen d 
							WHERE 
								t.departemen= d.replid and
								t.replid='.$_POST['replid'];
				$e 		= mysql_query($s);
				$r 		= mysql_fetch_assoc($e);
				$stat 	= ($e)?'sukses':'gagal';
				$out 	= json_encode(array(
							'status'        =>$stat,
							'tahunajaran'   =>$r['tahunajaran'],
							'tglmulai'      =>$r['tglmulai'],
							'tglakhir'      =>$r['tglakhir'],
							'keterangan'    =>$r['keterangan'],
							'id_departemen' =>$r['id_departemen'],
							'departemen'    =>$r['departemen']
						));
			break;
			// ambiledit -----------------------------------------------------------------

			// aktifkan -----------------------------------------------------------------
			case 'aktifkan':
				$e1   = mysql_query('UPDATE  '.$tb.' set aktif="0" where departemen = '.$_POST['departemen']);
				if(!$e1){
					$stat='gagal menonaktifkan';
				}else{
					$s2 = 'UPDATE  '.$tb.' set aktif="1" where replid = '.$_POST['replid'];
					$e2 = mysql_query($s2);
					if(!$e2){
						$stat='gagal mengaktifkan';
					}else{
						$stat='sukses';
					}
				}$out  = json_encode(array('status'=>$stat));
				//var_dump($stat);exit();

			break;
			// aktifkan -----------------------------------------------------------------


		}
	}
	echo $out;
	// echo json_encode($out);
?>