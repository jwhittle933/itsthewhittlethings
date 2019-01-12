@extends('layouts.master')
 
@section('style')
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection



@section('content')

<!-- Mount SideNav.jsx -->
@if (Auth::user())
<div id="side-nav" data-user="{{ Auth::user()->name }}"></div>
@else 
<div id="side-nav"></div>
@endif

<div class="main">

    <div class="header padding-md">
        <h1 class="text-center main-font color-white position-relative">{{ $data[0]->title }}</h1>
        <h2 class="text-center main-font color-white mt-5">{{$data[0]->author}}</h2>
    </div>
    <div class="post">
    	<p class="main-font first-letter">{!! nl2br($data[0]->body) !!}</p>
    	<p class="main-font">{{ $data[0]->created_at->diffForHumans() }}</p>
    </div>
    <div class="blog-nav">
        @if ( $data[0]->id !== 1 )
        <a href="/blog/{{ $data[0]->id - 1 }}" class="main-font font-lg blog-nav-button">
            <svg viewbox="0 0 40 40" class="blog-nav-arrow">
                <path d="M20 10 L10 20 L20 30" ></path>
            </svg>
            Previous
        </a>
        @endif
        {{-- Conditionally render 'Next' button based on final blog post id --}}
        <a href="/blog/{{ $data[0]->id + 1 }}" class="main-font font-lg blog-nav-button">
            Next
            <svg viewbox="0 0 40 40" class="blog-nav-arrow" class="blog-nav-arrow">
                <path d="M20 10 L30 20 L20 30" ></path>
            </svg>
        </a>
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
        <h3 class="main-font">Previous comments:</h3>
        @empty ( $comments[0] )
            <p class="main-font font-md">Be the first to leave a comment!</p>
        @endempty
        @foreach ( $comments as $comment )
            <!-- Implement a comment rating system that displays the top rated comment at the top -->
            <div class="comment">
                <p class="main-font font-lg">{{ $comment->name }} ({{ $comment->created_at ? $comment->created_at->diffForHumans() : '-' }}):</p>
                <p class="main-font font-md"> {!! nl2br($comment->comment) !!}</p>
                <div id="authenticated-user" class="comment-interact">
                    @if (Auth::user())
                    <form action="/comment/{{ $comment->id }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="main-font font-sm comment-delete">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="trash"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
                        </button>
                    </form>
                    @endif
                    <form action="/comment/{{ $comment->id }}" method="POST">
                        @method('PATCH')
                        <button type="submit" class="main-font font-sm comment-delete">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="like"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                        </button>
                    </form>
                </div>
            </div>
        @endforeach
    </div>
</div>
@endsection