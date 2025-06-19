<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['text'])) {
    $text = $_POST['text'];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.deepai.org/api/text2img");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(['text' => $text]));
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Api-Key: 9af22a6d-0bd1-4921-aa09-53513d1705ca"
    ]);

    $result = curl_exec($ch);
    curl_close($ch);

    header('Content-Type: application/json');
    echo $result;
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Chýba text']);
}
