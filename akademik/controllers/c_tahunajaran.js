var mnu       = 'tahunajaran';
var mnu2      = 'departemen';
var dir       = 'models/m_'+mnu+'.php';
var dir2      = 'models/m_'+mnu2+'.php';
var contentFR = '';

// main function ---
    $(document).ready(function(){
        contentFR += '<form autocomplete="off" onsubmit="simpan();return false;" id="'+mnu+'FR">' 
                        +'<input id="idformH" type="hidden">' 
                        
                        +'<label>Departemen</label>'
                        +'<div class="input-control text">'
                            +'<input type="hidden" name="departemenH" id="departemenH">'
                            +'<input disabled type="text" name="departemenTB" id="departemenTB">'
                            +'<button class="btn-clear"></button>'
                        +'</div>'
                        
                        +'<label>Tahun Ajaran</label>'
                        +'<div class="span3">'
                            +'<div class="input-control text" >'
                                +'<input maxlength="9" placeholder="ex : 2011-2012 " name="tahunajaranTB" id="tahunajaranTB" type="text">'
                            +'</div>'
                        +'</div>'

                        +'<label>Tanggal Mulai</label>'
                        +'<div class="input-control text" data-role="datepicker"'
                            +'data-date="2014-10-23"'
                            +'data-format="yyyy-mm-dd"'
                            +'data-effect="slide">'
                            +'<input id="tglmulaiTB" name="tglmulaiTB" type="text">'
                            +'<button class="btn-date"></button>'
                        +'</div>'

                        +'<label>Tanggal Akhir</label>'
                        +'<div class="input-control text" data-role="datepicker"'
                            +'data-date="2014-10-23"'
                            +'data-format="yyyy-mm-dd"'
                            +'data-effect="slide">'
                            +'<input id="tglakhirTB" name="tglakhirTB" type="text">'
                            +'<button class="btn-date"></button>'
                        +'</div>'

                        +'<label>Keterangan</label>'
                        +'<div class="input-control textarea">'
                            +'<textarea placeholder="keterangan" name="keteranganTB" id="keteranganTB"></textarea>'
                        +'</div>'
                        
                        +'<div class="form-actions">' 
                            +'<button class="button primary">simpan</button>&nbsp;'
                            +'<button class="button" type="button" onclick="$.Dialog.close()">Batal</button> '
                        +'</div>'
                    +'</form>';

        // combo departemen
        cmbdepartemen();

        //load table
        // viewTB();

        //add form
        $("#tambahBC").on('click', function(){
            viewFR('');
        });

        //search action
        $('#tahunajaranS').keydown(function (e){
            if(e.keyCode == 13)
                viewTB($('#departemenS').val());
        });$('#departemenS').on('change',function(){
            viewTB($(this).val());
        });

        // search button
        $('#cariBC').on('click',function(){
            $('#cariTR').toggle('slow');
            $('#tahunajaranS').val('');
        });
    }); 
// end of save process ---

//save process ---
    function simpan(){
        // var urlx ='&aksi=simpan&departemen='+$('#departemenS').val();
        var urlx ='&aksi=simpan';
        // edit mode
        if($('#idformH').val()!=''){
            urlx += '&replid='+$('#idformH').val();
        }
        $.ajax({
            url:dir,
            cache:false,
            type:'post',
            dataType:'json',
            data:$('form').serialize()+urlx,
            success:function(dt){
                if(dt.status!='sukses'){
                    cont = 'Gagal menyimpan data';
                    clr  = 'red';
                }else{
                    $.Dialog.close();
                    kosongkan();
                    viewTB($('#departemenS').val());
                    cont = 'Berhasil menyimpan data';
                    clr  = 'green';
                }
                notif(cont,clr);
            }
        });
    }
//end of save process ---

// view table ---
    // function viewTB(dep){
    function viewTB(dep){
        //alert('dep '+dep);
        var aksi ='aksi=tampil';
        var cari = '&departemenS='+dep
                    +'&tahunajaranS='+$('#tahunajaranS').val();
        $.ajax({
            url : dir,
            type: 'post',
            data: aksi+cari,
            beforeSend:function(){
                $('#tbody').html('<tr><td align="center" colspan="7"><img src="img/w8loader.gif"></td></tr></center>');
            },success:function(dt){
                setTimeout(function(){
                    $('#tbody').html(dt).fadeIn();
                },1000);
            }
        });
    }
// end of view table ---

// form ---
    function viewFR(id){
        $.Dialog({
            shadow: true,
            overlay: true,
            draggable: true,
            width: 500,
            padding: 10,
            onShow: function(){
                var titlex;
                if(id==''){  //add mode
                    titlex='<span class="icon-plus-2"></span> Tambah ';
                    $.ajax({
                        url:dir2,
                        data:'aksi=cmbdepartemen&replid='+$('#departemenS').val(),
                        type:'post',
                        dataType:'json',
                        success:function(dt){
                            $('#departemenH').val($('#departemenS').val());
                            $('#departemenTB').val(dt.departemen[0].nama);
                        }
                    });

                }else{ // edit mode
                    titlex='<span class="icon-pencil"></span> Ubah';
                    $.ajax({
                        url:dir,
                        data:'aksi=ambiledit&replid='+id,
                        type:'post',
                        dataType:'json',
                        success:function(dt){
                            $('#idformH').val(id);
                            $('#departemenH').val(dt.id_departemen);
                            $('#departemenTB').val(dt.departemen);
                            $('#tahunajaranTB').val(dt.tahunajaran);
                            $('#tglmulaiTB').val(dt.tglmulai);
                            $('#tglakhirTB').val(dt.tglakhir);
                            $('#keteranganTB').val(dt.keterangan);
                        }
                    });
                }$.Dialog.title(titlex+" Kriteria");
                $.Dialog.content(contentFR);
            }
        });
    }
// end of form ---

//paging ---
    function pagination(page,aksix,menux){
        var datax = 'starting='+page+'&aksi='+aksix+'&menu='+menux;
        var cari =  '&departemenS='+$('#departemenS').val()
                    +'&tahunajaranS='+$('#tahunajaranS').val();
        $.ajax({
            url:dir,
            type:"post",
            data: datax+cari,
            beforeSend:function(){
                $('#tbody').html('<tr><td align="center" colspan="7"><img src="img/w8loader.gif"></td></tr></center>');
            },success:function(dt){
                setTimeout(function(){
                    $('#tbody').html(dt).fadeIn();
                },1000);
            }
        });
    }   
//end of paging ---
    
//del process ---
    function del(id){
        if(confirm('melanjutkan untuk menghapus data?'))
        $.ajax({
            url:dir,
            type:'post',
            data:'aksi=hapus&replid='+id,
            dataType:'json',
            success:function(dt){
                var cont,clr;
                if(dt.status!='sukses'){
                    cont = '..Gagal Menghapus '+dt.terhapus+' ..';
                    clr  ='red';
                }else{
                    viewTB($('#departemenS').val());
                    cont = '..Berhasil Menghapus '+dt.terhapus+' ..';
                    clr  ='green';
                }
                notif(cont,clr);
            }
        });
    }
//end of del process ---
    
// notifikasi
function notif(cont,clr) {
    var not = $.Notify({
        caption : "<b>Notifikasi</b>",
        content : cont,
        timeout : 3000,
        style :{
            background: clr,
            color:'white'
        },
    });
}
// end of notifikasi

//reset form ---
    function kosongkan(){
        $('#idformTB').val('');
        $('#tahunajaranTB').val('');
        $('#tglmulaiTB').val('');
        $('#tglakhirTB').val('');
        $('#keteranganTB').val('');
    }
//end of reset form ---

// combo departemen ---
    function cmbdepartemen(){
        $.ajax({
            url:dir2,
            data:'aksi=cmbdepartemen',
            dataType:'json',
            type:'post',
            success:function(dt){
                var out='';
                if(dt.status!='sukses'){
                    out+='<option value="">'+dt.status+'</option>';
                }else{
                    $.each(dt.departemen, function(id,item){
                        out+='<option value="'+item.replid+'">'+item.nama+'</option>';
                    });
                    viewTB(dt.departemen[0].replid); 
                }$('#departemenS').html(out);
            }
        });
    }
//end of combo departemen ---

//aktifkan process ---
    function aktifkan(id){
    	var th  = $('#'+mnu+'TD_'+id).html();
    	var dep = $('#'+mnu2+'S').val();
    	//alert('d '+dep);
    	//return false;
        if(confirm(' mengaktifkan "'+th+'"" ?'))
        $.ajax({
            url:dir,
            type:'post',
            data:'aksi=aktifkan&replid='+id+'&departemen='+dep,
            dataType:'json',
            success:function(dt){
                var cont,clr;
                if(dt.status!='sukses'){
                    cont = '..Gagal Mengaktifkan '+th+' ..';
                    clr  ='red';
                }else{
                    viewTB($('#departemenS').val());
                    cont = '..Berhasil Mengaktifkan '+th+' ..';
                    clr  ='green';
                }
                notif(cont,clr);
            }
        });
    }
//end of aktifkan process ---