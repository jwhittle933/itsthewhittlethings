<?php

namespace App\Http\Controllers;

use App\Blogposts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('blog')->with('test', "User Dashboard");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('newblog')->with('test', "User Dashboard");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $title = $request->title;
        $body = $request->body;
        $author = $request->author;
        $tags = $request->tags;

        //Use Blogposts model to have auto generated timestamps
        $submit = Blogposts::create([
            'title' => $title,
            'author' => $author,
            'body' => $body,
            'keywords' => $tags, //tags fail on submit if not in ["", "", ...] format
            'votes' => 1, //default 1 vote for new post
        ]);
        if ($submit){
            return view('/blog')->with('test', "User Dashboard");
        } else {
            return view('newblog')->with('test', "User Dashboard");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view('single');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
