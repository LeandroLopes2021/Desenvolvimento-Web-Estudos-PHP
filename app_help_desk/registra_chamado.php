<?php
    session_start();


    echo '<pre>';
    print_r($_POST);
    echo '</pre>';

    $arquivo = fopen('arquivo.hd', 'a'); //abre ou cria o arquivo caso não exista

    $titulo = str_replace('#', '-', $_POST['titulo']);
    $categoria = str_replace('#', '-', $_POST['categoria']);
    $descricao = str_replace('#', '-', $_POST['descricao']);

    
    $texto = $_SESSION['id'] . "#" . $titulo . '#' . $categoria . '#' . $descricao . PHP_EOL;
    
    fwrite($arquivo, $texto); //escreve no arquivo

    fclose($arquivo); //fecha o arquivo

    header('location: abrir_chamado.php');
?>