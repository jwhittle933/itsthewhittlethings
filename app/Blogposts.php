<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blogposts extends Model
{
    protected $fillable = ['author', 'title', 'body', 'keywords' ,'votes'];
}
