<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blogposts extends Model
{
    protected $fillable = ['author', 'title', 'body', 'keywords' ,'votes'];
    protected $dates = ['created_at', 'updated_at'];
}
