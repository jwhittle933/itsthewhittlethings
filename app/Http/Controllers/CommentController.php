<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comments; 
use App\Blogposts;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * 
     * POST to /comments
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $blogID = $request->id;
        $name = $request->name;
        $comment = $request->comment;

        if($name && $comment && $blogID){
            $newComment = Comments::create([
                'comment' => $comment,
                'name' => $name,
                'blog_id' => $blogID,
                'votes' => 0
            ]);
            //TODO: Increment comment_count on Blogposts table
            if($newComment){
                $thankYou = "Thank you for commenting.";
                return redirect('/blog/' . $blogID . "/#comment-form")->with('success', 'Thank You');
            } else {
                return redirect('/blog/' . $blogID)->with('error', "There was a problem saving your comment. This is on our end and should be fixed shortly.");
            }
        } else if ($comment && !$name){
            return redirect('/blog/' . $blogID)->with('error', "Please include your name.");
        } else {
            return redirect('/blog/' . $blogID)->with('error', "Both fields are required.");
        }
    }

    /**
     * Display the specified resource.
     *
     *  GET request to /comment/{id} 
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $affected = Comments::where('blog_id', $id)->get();
        $number =  count($affected);
        return $number;
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
     * PUT/PATCH Requests to /comments/{id} 
     *
     * Used for updating individual comment likes
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
     * DELETE requests to /comments/{id}
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Comments::where('id', $id)->delete();
        return redirect('/blog');
    }
}
