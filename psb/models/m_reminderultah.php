<?php
	session_start();
	require_once '../../lib/dbcon.php';
	require_once '../../lib/func.php';
	require_once '../../lib/pagination_class.php';
	$mnu = 'angsuran';
	$tb  = 'psb_'.$mnu;

	if(!isset($_POST['aksi'])){
		$out=json_encode(array('status'=>'invalid_no_post'));		
	}else{
		switch ($_POST['aksi']) {
			// -----------------------------------------------------------------
			case 'tampil':
				$namaibu   = isset($_POST['namaibuS'])?$_POST['namaibuS']:'';
				$namasiswa = isset($_POST['namasiswaS'])?$_POST['namasiswaS']:'';
				$alamatibu = isset($_POST['alamatibuS'])?$_POST['alamatibuS']:'';
				$emailibu  = isset($_POST['emailibuS'])?$_POST['emailibuS']:'';
				$sql = 'SELECT 	
							i.replid,
							i.namaibu,
							i.tanggallahiribu,
							if(DATEDIFF(CURDATE(),i.tanggallahiribu)<0,1,0)isAktif,
							ABS(DATEDIFF(CURDATE(),i.tanggallahiribu))selisihHari,
							(if(MONTH(CURDATE())= MONTH(i.tanggallahiribu),1,0))isThisMonth,
							s.namasiswa,
							i.alamatibu,
							i.emailibu
						FROM  psb_siswa s 
							JOIN psb_siswaibu i on i.siswa = s.replid 
						WHERE 
							namaibu LIKE "%'.$namaibu.'%" AND
							namasiswa LIKE "%'.$namasiswa.'%" AND
							alamatibu LIKE "%'.$alamatibu.'%" AND
							emailibu LIKE "%'.$emailibu.'%" 
						ORDER BY 
							i.tanggallahiribu asc,
							i.namaibu asc,
							s.namasiswa asc';
pr($sql);
				if(isset($_POST['starting'])){ //nilai awal halaman
					$starting=$_POST['starting'];
				}else{
					$starting=0;
				}

				$recpage = 10;//jumlah data per halaman
				$aksi    ='tampil';
				$subaksi ='';
				$obj     = new pagination_class($sql,$starting,$recpage,$aksi, $subaksi);
				$result  =$obj->result;

				#ada data
				$jum	= mysql_num_rows($result);
				$out ='';
				if($jum!=0){	
					// $nox 	= $starting+1;
					while($res = mysql_fetch_assoc($result)){	
						$btn ='<td align="center">
									<button '.(isAksi('reminderultah','u')?'onclick="viewFR('.$res['replid'].');"':'disabled').' data-hint="ubah"  >
										<i class="icon-pencil on-left"></i>
									</button>
									<button data-hint="hapus" '.(isAksi('reminderultah','d')?'onclick="del('.$res['replid'].');"':'disabled').'>
										<i class="icon-remove on-left"></i>
									</button>
								 </td>';
						$out.= '<tr>
									<td align="center">'.$res['tanggallahiribu'].'</td>
									<td align="center">'.$res['namaibu'].'</td>
									<td align="center">'.$res['namasiswa'].'</td>
									<td align="center">'.$res['namasiswa'].'</td>
									<td align="center">'.$res['alamatibu'].'</td>
									<td align="center">'.$res['emailibu'].'</td>
									'.$btn.'
								</tr>';
									// <td align="center">'.$res['kelas'].'</td>
						// $nox++;
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
				$s = $tb.' set 	angsuran = "'.filter($_POST['angsuranTB']).'",
								keterangan 	= "'.filter($_POST['keteranganTB']).'"';
				$s2	= isset($_POST['replid'])?'UPDATE '.$s.' WHERE replid='.$_POST['replid']:'INSERT INTO '.$s;
				$e2 = mysql_query($s2);
				if(!$e2){
					$stat = 'gagal menyimpan';
				}else{
					$stat = 'sukses';
				}$out  = json_encode(array('status'=>$stat));
			break;
			// add / edit -----------------------------------------------------------------
			
			// delete -----------------------------------------------------------------
			case 'hapus':
				$d    = mysql_fetch_assoc(mysql_query('SELECT * from '.$tb.' where replid='.$_POST['replid']));
				$s    = 'DELETE from '.$tb.' WHERE replid='.$_POST['replid'];
				$e    = mysql_query($s);
				$stat = ($e)?'sukses':'gagal';
				$out  = json_encode(array('status'=>$stat,'terhapus'=>$d['angsuran']));
			break;
			// delete -----------------------------------------------------------------

			// ambiledit -----------------------------------------------------------------
			case 'ambiledit':
				$s 		= ' SELECT *
							from '.$tb.'
							WHERE  replid='.$_POST['replid'];
				$e 		= mysql_query($s);
				$r 		= mysql_fetch_assoc($e);
				$stat 	= ($e)?'sukses':'gagal';
				$out 	= json_encode(array(
							'status'     =>$stat,
							'angsuran'    =>$r['angsuran'],
							'keterangan' =>$r['keterangan'],
						));
			break;
			// ambiledit -----------------------------------------------------------------

			// cmbangsuran -----------------------------------------------------------------
			case 'cmb'.$mnu:
				$w='';
				if(isset($_POST['replid'])){
					$w.='where replid ='.$_POST['replid'];
				}

				$s	= ' SELECT *
						from '.$tb.'
						'.$w.' 
						ORDER BY '.$mnu.' ASC';
						// pr($s);
				$e 	= mysql_query($s);
				$n 	= mysql_num_rows($e);
				$ar=$dt=array();

				if(!$e){ //error
					$ar = array('status'=>'error');
				}else{
					if($n=0){ // kosong 
						$ar = array('status'=>'kosong');
					}else{ // ada data
						if(!isset($_POST['replid'])){
							while ($r=mysql_fetch_assoc($e)) {
								$dt[]=$r;
							}
						}else{
							$dt[]=mysql_fetch_assoc($e);
						}$ar = array('status'=>'sukses',$mnu=>$dt);
					}
				}$out=json_encode($ar);
			break;
			// cmbtahunajaran -----------------------------------------------------------------

		}
	}echo $out;

	// ---------------------- //
	// -- created by rovi -- //
	// ---------------------- //
?>