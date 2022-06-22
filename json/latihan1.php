<?php

    $mahasiswa = [
        "nama" => "wisnu",
        "umur" => 21,
        "hobi" => "Mancing"
    ];
    
    $data = json_encode($mahasiswa);
    echo $data;
?>