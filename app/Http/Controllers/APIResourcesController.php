<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Blogposts;

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
        $table = $request->table;
        $which = $request->which;
        $what = $request->what;

        if($which === "all"){ //populate blog main page
            //$data = DB::table($table)->select('id', 'title', 'author')->get();
            $data = Blogposts::all();
        } else if($which === "specific"){
            $data = DB::table($table)->select($what)->get();
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
     * Retrieves initial vote count
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $affected = DB::table('blogposts')->where('id', $id)->select('votes')->get();
        
        if($affected){
            return $affected;
        } else {
            return "?";
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
        $affected = DB::table('blogposts')->where('id', $id)->increment('votes');
        if($affected){
            $votes = DB::table('blogposts')->where('id', $id)->select('votes')->get();
            if ($votes){
                return $votes;
            } else {
                return "Hmm. There was an issue...";
            }
        } else {
            return "Hmm. There was an issue...";
        }
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
