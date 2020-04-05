@extends('adminlte::page')

@section('title', 'AdminLTE')

@section('content_header')
    <h1>Главная страница администратора</h1>
@stop

@section('content')
    Logged in as {{auth()->getDefaultDriver()}}
@endsection
