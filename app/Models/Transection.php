<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transection extends Model
{
    protected $fillable = ['TransId','Type','ProductId','Qyt','Price','Detail'];
}
