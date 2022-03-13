//Bài 1
document.getElementById("btnSapXep3So").onclick =function(){
    // Đầu vào
    var txtSo1 = parseInt(document.getElementById("txtSo1").value); 
    var txtSo2 = parseInt(document.getElementById("txtSo2").value); 
    var txtSo3 = parseInt(document.getElementById("txtSo3").value); 
    
    //Xử lý
    var x;
    if (txtSo1 > txtSo2)
    {
        x = txtSo1;
        txtSo1 = txtSo2;
        txtSo2 = x;
    }
    if (txtSo1 > txtSo3) 
    {
        x = txtSo1;
        txtSo1 = txtSo3;
        txtSo3 = x;
    }
    if (txtSo2 > txtSo3) 
    {
        x = txtSo2;
        txtSo2 = txtSo3;
        txtSo3 = x;
    }
//Kết quả
 var kqTongSo2Ky ="<div class='alert alert-success'>" +
 "Số tăng dần : " + txtSo1 +" " + txtSo2+" " + txtSo3 + "</div>";


 // Dom tới thẻ div #ThongBaoBai1 để in ra kết quả
 document.getElementById("footerThongBaoBai1").innerHTML = kqTongSo2Ky;    
}

//Bài 2
document.getElementById("btnChaoHoi").onclick =function(){
    // Đầu vào
    var chaoHoi = (document.getElementById("optchaoHoi").value); 
    var loiChao = "";

    //Xử lý
    if(chaoHoi == "B"){
        loiChao = "Xin chào Bố"
    }else if(chaoHoi == "M"){
        loiChao = "Xin chào Mẹ"
    }else if(chaoHoi == "A"){
        loiChao = "Xin chào Anh Trai"
    }else{
        loiChao = "Xin chào Em Gái"
    }

//Kết quả
 var kqLoiChao ="<div class='alert alert-success'>" +
 loiChao + "</div>";


 // Dom tới thẻ div #ThongBaoBai2 để in ra kết quả
 document.getElementById("footerThongBaoBai2").innerHTML = kqLoiChao;    
}

//Bài3 
document.getElementById("btnXuatSoNguyen").onclick =function(){
    // Đầu vào
    var So1 = parseInt(document.getElementById("txtSoN1").value); 
    var So2 = parseInt(document.getElementById("txtSoN2").value); 
    var So3 = parseInt(document.getElementById("txtSoN3").value); 
    
    //Xử lý
    var soChan = 0,soLe = 0;
    if (So1 % 2 == 0)
    {
        soChan++;
    }else{
        soLe++;
    }
    if (So2 % 2 == 0)
    {
        soChan++;
    }else{
        soLe++;
    }
    if (So3 % 2 == 0)
    {
        soChan++;
    }else{
        soLe++;
    }
//Kết quả
 var kqXuatSoNguyen ="<div class='alert alert-success'>" +
 "Chương trình có  " + soChan +" số chẵn " + "</br>" +
 "Chương trình có  " + soLe +" số lẻ " + "</div>";


 // Dom tới thẻ div #ThongBaoBai3 để in ra kết quả
 document.getElementById("footerThongBaoBai3").innerHTML = kqXuatSoNguyen;    
}

//Bài4 
document.getElementById("btnTamGiac").onclick =function(){
    // Đầu vào
    var a = parseInt(document.getElementById("txtCanha").value); 
    var b = parseInt(document.getElementById("txtCanhb").value); 
    var c = parseInt(document.getElementById("txtCanhc").value); 
    var pytagoc = a*a + b*b; 
    var pytagob = a*a + c*c; 
    var pytagoa = c*c + b*b; 
    var tamGiac = "";
    
    //Xử lý
    if(c*c == pytagoc){
        tamGiac = "Tam giác vuông";
    }else if(b*b == pytagob){
        tamGiac = "Tam giác vuông";
    }else if(a*a == pytagoa){
        tamGiac = "Tam giác vuông";
    }
    else if (a == b && a == c)
    {
        tamGiac = "Tam giác đều";
    }
    else if (a == b && a != c)
    {
        tamGiac = "Tam giác cân";
    }
    else if (c == b && a != c)
    {
        tamGiac = "Tam giác cân";
    }
    else if (a == c && b != c)
    {
        tamGiac = "Tam giác cân";
    }else{
        tamGiac = "Tam giác thường";
    }
//Kết quả
 var kqTamGiac ="<div class='alert alert-success'>" + tamGiac + "</div>";


 // Dom tới thẻ div #ThongBaoBai4 để in ra kết quả
 document.getElementById("footerThongBaoBai4").innerHTML = kqTamGiac;    
}
