<?php

namespace console\controllers;

use Yii;
use yii\console\Controller;
use yii\helpers\Console;
use common\models\Wallet;
use common\models\Deposit;

/**
 * @author Eugene Terentev <eugene@terentev.net>
 */
class TestController extends Controller
{
    public function actionIndex()
    {
        Yii::error('Test.....');
        
        $deposit = new Deposit();
        $deposit->user_id = 3;
        $deposit->sender = '112312312GsEbcfBiQSmdfgfdgJv';
        $deposit->receiver = '19AiUnEx5UXeGsEbcfBiQSm772TJjddbJv';
        $deposit->amount = 0.02;
        $deposit->type = 1;
        $deposit->save();
        
        // Find wallet
        $wallet = Wallet::find()->where(['user_id'=>3])->limit(1)->one();
        if($deposit->type == 1){
            $wallet->amount_btc += $deposit->amount;
            $wallet->save();
        }
        if($deposit->type == 2){
            $wallet->amount_eth += $deposit->amount;  
            $wallet->save();
        }
        
    }
}