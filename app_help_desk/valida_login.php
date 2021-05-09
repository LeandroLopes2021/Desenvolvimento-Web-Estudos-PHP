<?php

    session_start();
    
    $_POST;//recupera os parametros via post
    
    $usuario_autenticado = false;
    $usuario_id = null;
    $usuario_perfil = null;

    $perfis = array(1 => 'administrativo', 2 => 'usuario');

    $usuario_app = array(
        array ('id' => 1, 'email' => 'adm1@gmail.com', 'senha' => '1234', 'perfil_id' => 1),
        array ('id' => 2, 'email' => 'adm2@gmail.com', 'senha' => '1234', 'perfil_id' => 1),
        array ('id' => 3, 'email' => 'user1@gmail.com', 'senha' => '1234', 'perfil_id' => 2),
        array ('id' => 4, 'email' => 'user2@gmail.com', 'senha' => '1234', 'perfil_id' => 2));

    foreach($usuario_app as $user)
    {
        if($user['email'] == $_POST['email'] && $user['senha'] == $_POST['senha'])
        {
            $usuario_autenticado = true;
            $usuario_id = $user['id'];
            $usuario_perfil = $user['perfil_id'];
        }

    }

    if($usuario_autenticado)
    {
        echo 'usuario autenticado';
        $_SESSION['autenticado'] = 'SIM';
        $_SESSION['id'] = $usuario_id;
        $_SESSION['perfil_id'] = $usuario_perfil;
        header('location: home.php');
    }
    else
    {
        $_SESSION['autenticado'] = 'NAO';
        header('location: index.php?login=erro'); //redirecionamento
    }










?>