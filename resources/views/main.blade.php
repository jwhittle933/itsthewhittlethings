@extends('layouts.master')

@section('style')
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div class="container mt-5">
        <div class="text-center">
            <h1 class="main-font">Its the Whittle Things</h1>
        </div>
    </div>
    <div id="landing"></div>
@endsection

@section('script')
<script src="{{ asset('js/app.js') }}"></script>
@endsection
