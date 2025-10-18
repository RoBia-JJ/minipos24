<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Billitem extends Model
{
    protected $fillable = ['BillId','ItemName','Qyt','Price'];
}
