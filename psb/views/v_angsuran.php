<?php isMenu($modul,'angsuran'); ?>
<script src="controllers/c_angsuran.js"></script>

<h4 class="fg-white"><b>Diskon Tunai</b></h4>
<button <?php echo isAksi('angsuran','c')?'onclick="viewFR(\'\')"':'disabled'; ?> class="place-left" data-hint="Tambah Data" id="tambahBC"><span class="icon-plus-2"></span> </button> 
<table class="table hovered bordered striped">
    <thead>
        <tr style="color:white;"class="info">
            <th class="text-center">Cicilan</th>
            <th class="text-center">Keterangan</th>
            <th class="text-center">Aksi</th>
        </tr>
        <tr xstyle="display:none;" id="cariTR" class="info">
            <th class="text-center"><div class="input-control text"><input class="cari" placeholder="cari..." id="cicilanS"></div></th>
            <th class="text-center"><div class="input-control text"><input class="cari" placeholder="cari..." id="keteranganS"></div></th>
            <th></th>
        </tr>
    </thead>
    <tbody id="tbody">
    </tbody>
</table> 