<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    protected $fillable = [
    	'comment', 
    	'name', 
    	'blog_id',
    	'votes'
    ];

    protected $dates = [
    	'created_at', 
    	'updated_at'
    ];
}
