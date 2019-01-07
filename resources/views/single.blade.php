@extends('layouts.master')

{{--  
@section('style')
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection
--}}


@section('content')

<!-- Mount SideNav.jsx -->
<div id="side-nav"></div>

<div class="main">
    <div class="header padding-md">
        <h1 class="text-center main-font color-white position-relative">{{ $data[0]->title }}</h1>
        <h2 class="text-center main-font color-white mt-5">{{$data[0]->author}}</h2>
    </div>
    <div >
    	<p class="main-font">{{ $data[0]->body }}</p>
    	<p class="main-font">{{ $data[0]->created_at->diffForHumans() }}</p>
    </div>
    <div class="blog-nav">
        @if ( $data[0]->id !== 1 )
        <button class="save-comment"><a href="/blog/{{ $data[0]->id - 1 }}">Previous</a></button>
        @endif
        {{-- Conditionally render 'Next' button based on final blog post id --}}
        <button class="save-comment"><a href="/blog/{{ $data[0]->id + 1 }}">Next</a></button>
    </div>
    <div id="comment-form" class="comment-form">
        @if(session('success'))
            <p class="main-font ml-5">{{ session('success')}}</p>
        @endif
    	<h2 class="main-font  mb-5">Leave a Comment:</h2>
    	<form action="/comment" method="POST">
            @csrf
            <input type="hidden" name="id" value="{{ $data[0]->id }}">
    		<input class="main-font" type="text" name="name" placeholder="Name" required>
    		<textarea class="main-font" type="text" name="comment" rows="10" placeholder="Comment" required></textarea>
            <button type="submit" class="save-comment">Save</button>
    	</form>
    </div>
    <div class="comments">
        <h2 class="main-font font-lg">Previous comments:</h2>
        @empty ( $comments[0] )
            <p class="main-font font-sm">Be the first to leave a comment!</p>
        @endempty
        @foreach ( $comments as $comment )
            <div class="comment">
                <p class="main-font font-md"> {{ $comment->comment }}</p>
                <p class="main-font font-md"> {{ $comment->name }} </p>
                <p class="main-font font-md"> {{ $comment->created_at }} </p>
            </div>
        @endforeach
    </div>
</div>
@endsection