<?php

namespace App\Http\Controllers;

use App\Blogposts;
use App\Comments;
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
        return view('blog');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('newblog');
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
        $tags = "[\"" . str_replace(", ", "\", \"", $tags) . "\"]";
        //dd($tags);

        $submit = Blogposts::create([
            'title' => $title,
            'author' => $author,
            'body' => $body,
            //tags fail on submit if not in ["", "", ...] format
            'keywords' => $tags,
            //default 1 vote for new post
            'votes' => 1, 
        ]);
        if ($submit){
            return view('/blog');
        } else {
            return view('newblog');
        }
    }

    /**
     * Display the specified resource.
     * 
     * GET request to /blog/{id}
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //TODO: Handle errors for Undefined Offset
        $affected = Blogposts::where('id', $id)->get();
        $comments = Comments::where('blog_id', $id)->select('id', 'comment', 'name', 'created_at')->get();



        if(count($affected) !== 0){
            return view('single', [
                'data' => $affected,
                'comments' => $comments,
            ]);
        } else {
            return redirect('blog');
        }
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
