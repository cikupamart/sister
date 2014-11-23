var mnu       = 'guru';
var mnu2      = 'departemen';
var mnu3      = 'tahunajaran';
var mnu4      = 'pelajaran';

var dir       = 'models/m_'+mnu+'.php';
var dir2      = 'models/m_'+mnu2+'.php';
var dir3      = 'models/m_'+mnu3+'.php';
var dir4      = 'models/m_'+mnu4+'.php';
var contentFR = '';

// main function ---
    $(document).ready(function(){
        contentFR += '<form autocomplete="off" onsubmit="simpan();return false;" id="'+mnu+'FR">' 
                        +'<input id="idformH" type="hidden">' 
                        +'<label>Mata Pelajaran</label>'
                        +'<div class="input-control select span3">'
                            +'<input type="text" name="pelajaranH" id="pelajaranH">'
                            +'<select  name="pelajaranTB" id="pelajaranTB"></select>'
                        +'</div>'
                        +'<label>Pegawai</label>'
                        +'<div class="input-control text">'
                            +'<input class="span2" placeholder="NIP" type="text" name="nipTB" id="nipTB">'
                            +'&nbsp; <input  class="span4"  placeholder="Pegawai" type="text" name="pegawaiTB" id="pegawaiTB">'
                        +'</div>'
                        +'<label>Keterangan</label>'
                        +'<div class="input-control textarea">'
                            +'<textarea placeholder="keterangan ..." id="keteranganTB" name="keteranganTB"></textarea>'
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

        //tanggal 
         $("#tglmulaiTB").datepicker({
            date: "2013-01-01", // set init date
            format: "d/m/y", // set output format
            effect: "none", // none, slide, fade
            position: "bottom", // top or bottom,
            locale: 'en', // 'ru' or 'en', default is $.Metro.currentLocale
        });

    }); 
// end of main function ---

//save process ---
    function simpan(){
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
        // alert(dep);
        var aksi ='aksi=tampil';
        var cari = '&departemenS='+dep
                    +'&tahunajaranS='+$('#tahunajaranS').val();
        $.ajax({
            url : dir,
            type: 'post',
            data: aksi+cari,
            beforeSend:function(){
                $('#tbody').html('<tr><td align="center" colspan="6"><img src="img/w8loader.gif"></td></tr></center>');
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
                $('#tbody').html('<tr><td align="center" colspan="6"><img src="img/w8loader.gif"></td></tr></center>');
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
        $('#angkatanTB').val('');
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
                    //panggil fungsi viewTB() ==> tampilkan tabel 
                    viewTB(dt.departemen[0].replid); 
                    // alert(dt.departemen[0].replid);
                }$('#departemenS').html(out);
            }
        });
    }
//end of combo departemen ---
