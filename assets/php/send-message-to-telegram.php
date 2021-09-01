<?php
$msgs = [];
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $token = "1913337305:AAEh-6TQSlXYq5s9gCHZrpMRQp3UqAvIhVM";
    $chat_id = "-1001508109061";
    if (!empty($_POST['name']) && !empty($_POST['phone'])){
        if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $name = "Имя пославшего: " . strip_tags($_POST['name']) . "%0A";
          }
        }
        if (isset($_POST['phone'])) {
          if (!empty($_POST['phone'])){
            $phone = "Телефон: " . "%2B" . strip_tags($_POST['phone']) . "%0A";
          }
        }
        if (isset($_POST['theme'])) {
          if (!empty($_POST['theme'])){
            $theme = "Тема: " .strip_tags($_POST['theme']);
          }
        }
        // Формируем текст сообщения
        $txt = $name . $phone . $theme;
        $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");
        if ($sendTextToTelegram) {
            $msgs['okSend'] = 'Спасибо за отправку вашего сообщения!';
            echo json_encode($msgs);
          return true;
        } else {
            $msgs['err'] = 'Ошибка. Сообщение не отправлено!';
            echo json_encode($msgs);
            die('Ошибка. Сообщение не отправлено!');
        }
    } else {
        $msgs['err'] = 'Ошибка. Вы заполнили не все обязательные поля!';
        echo json_encode($msgs);;
    }
} else {
  header ("Location: /");
}
?>