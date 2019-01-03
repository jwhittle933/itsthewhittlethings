<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class APIResourcesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * GET request to /content
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $content = $request->table;
        $what = $request->which;

        if($what === "all"){
            $data = DB::table($content)->select('id', 'title', 'author')->get();
        } else if($what === "specific"){
            //query for stuff
        }

        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * GET request to /content/create
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
     * POST request to /content
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * GET request to /content/{id}
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $affected = DB::table('blogposts')->where('id', $id)->increment('votes');
        if($affected){
            return "Upvote success";
        } else {
            return "Hmm. There was an issue...";
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * GET request to /content/{id}/edit
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
     * PUT/PATCH request to /content/{id}
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
     * DELETE request to /content/{id} 
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
