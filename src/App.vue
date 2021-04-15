<template>
<!--  <div>-->
<!--   <body style="background-color: gainsboro">-->

<!--    <router-view/>-->

<!--    </body>-->

<!--  </div>-->

  <div class="container" style="background-color: white">
    <header>
      <div class="row" style="margin-top: 20px">

        <div class="hidden-xs col-sm-2 ">
          <img src='@/assets/img/logo.png' alt="kartcentrum" class="pull-left img-responsive " >
        </div>
        <div class="col-sm-10">
          <h1 >Kartcentrum <span class="text-danger"> MAX</span></h1>

        </div>

      </div>
<!--      {% for message in app.flashes('notice') %}-->
<!--      <div class="alert alert-success">-->
<!--        <strong>Success!</strong> {{ message }}-->
<!--      </div>-->
<!--      {% endfor %}-->
<!--      {% for message in app.flashes('error') %}-->
<!--      <div class="alert alert-danger">-->
<!--        <strong>Fout!</strong> Gebruiker {{ message }}-->
<!--      </div>-->
<!--      {% endfor %}-->
    </header>
    <nav class="navbar navbar-default" style="margin-bottom: 0px">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-fire"></span> </a>
        </div>

        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active"><router-link to="/">home</router-link></li>
            <!--  <li><a href="{{ path('kartactiviteiten') }}">aanbod</a></li>-->
            <!--  <li><a href="{{ path('registreren') }}">registreren</a></li>-->
            <li><a href="#">contact</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
<!--            <li><a href="{{ path('app_login') }}">inloggen</a></li>-->
          </ul>
        </div>
      </div>
    </nav>
    <figure>
      <img style="margin-bottom: 20px" class="img-responsive" src='@/assets/img/kart-wide.jpg' />
    </figure>
    <router-view/>
    <hr>
    <footer>

      <img class="pull-right img-thumbnail" width="40"  style="margin-top: -10px;margin-bottom: 10px" src='@/assets/img/linkedin.jpg' />
      <img class="pull-right img-thumbnail" width="40"  style="margin-top: -10px;margin-bottom: 10px" src='@/assets/img/tweet.jpg' />
      <img class="pull-right img-thumbnail " width="40"  style="margin-top: -10px;margin-bottom: 10px" src='@/assets/img/pinterest.png'/>

      <p class="text-muted text-center">&copy;afdeling applicatieontwikkelaar Tinwerf 10, 2544 ED Den Haag. Telefoon:088 666 3600 </p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', './asset/js/jquery-3.2.1.min.js')
    document.head.appendChild(externalScript)
    externalScript.setAttribute('src', './asset/js/bootstrap.min.js')
    document.head.appendChild(externalScript)
    externalScript.setAttribute('src', './asset/js/jquery-ui.js')
    document.head.appendChild(externalScript)
  },

}
</script>

<style>
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/jquery-ui.css";
</style>
