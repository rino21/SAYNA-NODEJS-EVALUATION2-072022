$(document).ready(()=>{
    ajoutAvis();
    getDataBackend();
    getDataFrontend();
    getDataMarketing();
    getDataUx();
    getDataIndex();
    checkNote();
})


function ajoutAvis()
{
    $("#btn").click(function(){
        var firstName = $("#fname").val();
        var lastName = $("#lname").val();
        var avis = $("#avis").val();
        var note = $("#note").val();
        var formation = $("#formation").val();

        if(firstName=="" || lastName=="" || avis=="" || note=="" ||formation=="")
        {
            $(".msg").css({'width':'100%','height':'30px','background-color':'rgba(255,0,0,0.65)','transition':'height 0.5s ease-in-out'});
            $(".msg").html("Remplisez votre champs !");
        }
        else{
            $.ajax({
                url:'/ajouter_avi',
                method:'post',
                data: {
                    _firstName:firstName,
                    _lastName:lastName,
                    _avis:avis,
                    _note:note,
                    _formation:formation
                },
                success:function(data){
                    
                }
            });
            $(".msg").css({'width':'100%','height':'30px','background-color':'dodgerblue','transition':'height 0.5s ease-in-out'});
            $(".msg").html("Votre avis a bien enregistré !");
            $("#form").trigger("reset");
            setTimeout(()=>{
                $(".msg").css({'width':'0%','height':'0px','transition':'height 0.5s ease-in-out'});
                $(".msg").html("");
            },2000);
        }
        
    });
}


function getDataBackend()
{
    $.ajax({
        url:'/backend',
        method:'post',
        success:function(data){
            var dataHtml="";
            for(var i=0;i<data.length;i++)
            {
                dataHtml += `
                    <div class="flip-box">
						<div class="flip-box-inner">
						  <div class="flip-box-front">
							  <div class="img-name">
								  <img src="public/image/user2.png" alt="" width="20%" height="20%">
								  <h3>${data[i].firstName}<br>${data[i].lastName}</h3>
							  </div>
							  <p class="text-server">
								  <span style="color: dodgerblue;font-weight:bold">AVIS :</span><br><br>
								  ${data[i].avis}
							  </p>
						  </div>
						  <div class="flip-box-back">
							  <p class="text-server" style="height:20px">
								  <span style="color: dodgerblue;font-weight:bold">Note : ${data[i].note}</span>
							  </p>
						  </div>
						</div>
					</div>
            `;
            }
            $("#data-backend").html(dataHtml);
        }
    })
}


function getDataFrontend()
{
    $.ajax({
        url:'/frontend',
        method:'post',
        success:function(data){
            var dataHtml="";
            for(var i=0;i<data.length;i++)
            {
                dataHtml += `
                    <div class="flip-box">
						<div class="flip-box-inner">
						  <div class="flip-box-front">
							  <div class="img-name">
								  <img src="public/image/user2.png" alt="" width="20%" height="20%">
								  <h3>${data[i].firstName}<br>${data[i].lastName}</h3>
							  </div>
							  <p class="text-server">
								  <span style="color: dodgerblue;font-weight:bold">AVIS :</span><br><br>
								  ${data[i].avis}
							  </p>
						  </div>
						  <div class="flip-box-back">
							  <p class="text-server" style="height:20px">
								  <span style="color: dodgerblue;font-weight:bold">Note : ${data[i].note}</span>
							  </p>
						  </div>
						</div>
					</div>
            `;
            }
            $("#data-frontend").html(dataHtml);
        }
    })
}


function getDataMarketing()
{
    $.ajax({
        url:'/marketing',
        method:'post',
        success:function(data){
            var dataHtml="";
            for(var i=0;i<data.length;i++)
            {
                dataHtml += `
                    <div class="flip-box">
						<div class="flip-box-inner">
						  <div class="flip-box-front">
							  <div class="img-name">
								  <img src="public/image/user2.png" alt="" width="20%" height="20%">
								  <h3>${data[i].firstName}<br>${data[i].lastName}</h3>
							  </div>
							  <p class="text-server">
								  <span style="color: dodgerblue;font-weight:bold">AVIS :</span><br><br>
								  ${data[i].avis}
							  </p>
						  </div>
						  <div class="flip-box-back">
							  <p class="text-server" style="height:20px">
								  <span style="color: dodgerblue;font-weight:bold">Note : ${data[i].note}</span>
							  </p>
						  </div>
						</div>
					</div>
            `;
            }
            $("#data-marketing").html(dataHtml);
        }
    })
}


function getDataUx()
{
    $.ajax({
        url:'/uxui',
        method:'post',
        success:function(data){
            var dataHtml="";
            for(var i=0;i<data.length;i++)
            {
                dataHtml += `
                    <div class="flip-box">
						<div class="flip-box-inner">
						  <div class="flip-box-front">
							  <div class="img-name">
								  <img src="public/image/user2.png" alt="" width="20%" height="20%">
								  <h3>${data[i].firstName}<br>${data[i].lastName}</h3>
							  </div>
							  <p class="text-server">
								  <span style="color: dodgerblue;font-weight:bold">AVIS :</span><br><br>
								  ${data[i].avis}
							  </p>
						  </div>
						  <div class="flip-box-back">
							  <p class="text-server" style="height:20px">
								  <span style="color: dodgerblue;font-weight:bold">Note : ${data[i].note}</span>
							  </p>
						  </div>
						</div>
					</div>
            `;
            }
            $("#data-uxui").html(dataHtml);
        }
    })
}

function getDataIndex()
{
    $.ajax({
        url:'/index',
        method:'post',
        success:function(data){
            var dataHtml="";
            for(var i=0;i<data.length;i++)
            {
                dataHtml += `
                    <div class="flip-box">
						<div class="flip-box-inner">
						  <div class="flip-box-front">
							  <div class="img-name">
								  <img src="public/image/user2.png" alt="" width="20%" height="20%">
								  <h3>${data[i].firstName}<br>${data[i].lastName}</h3>
							  </div>
							  <p class="text-server">
								  <span style="color: dodgerblue;font-weight:bold">AVIS :</span><br><br>
								  ${data[i].avis}
							  </p>
						  </div>
						  <div class="flip-box-back">
							  <p class="text-server" style="height:20px">
								  <span style="color: dodgerblue;font-weight:bold">Note : ${data[i].m_note}</span>
							  </p>
                              <p class="text-server" style="height:20px">
								  <span style="color: dodgerblue;font-weight:bold">Formation : ${data[i].formation}</span>
							  </p>
						  </div>
						</div>
					</div>
            `;
            }
            $("#data-index").html(dataHtml);
        }
    })
}


function checkNote()
{
    $("#note").keyup(function(){
        var val = parseFloat($(this).val());
        if(val > 5){
            $(this).val('');
        }
    })
}

