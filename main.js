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

//Bài làm thêm
//Bài1
document.getElementById("btnTinhNgay").onclick =function(){
    // Đầu vào
    var ngay1 = parseInt(document.getElementById("txtNgay1").value); 
    var thang1 = parseInt(document.getElementById("txtThang1").value); 
    var nam1 = parseInt(document.getElementById("txtNam1").value); 
    var ngayTruoc = 0;
    var ngaySau = 0;
    var thangTruoc = 0;
    var thangSau = 0;
    var namTruoc = 0;
    var namSau = 0;
    //Xử lý
    if(ngay1 == 30 && thang1 == 4 || thang1 == 6 || thang1 == 9 
        || thang1 == 11){
        namSau = nam1;
        namTruoc = nam1;
        thangTruoc = thang1;
        thangSau = ++thang1;
        ngayTruoc = --ngay1;
        ngaySau = 1;
    }else if(ngay1 == 31 &&thang1 == 1 || thang1 == 3 || thang1 == 5 
        || thang1 == 7 || thang1 == 8 || thang1 == 10){
        namSau = nam1;
        namTruoc = nam1;
        thangTruoc = thang1;
        thangSau = ++thang1;
        ngayTruoc = --ngay1;
        ngaySau = 1;
    }else if(ngay1 == 28 && thang1 == 2 ){
        namSau = nam1;
        namTruoc = nam1;
        thangTruoc = thang1;
        thangSau = ++thang1;
        ngayTruoc = --ngay1;
        ngaySau = 1;
    }
    else if (ngay1 == 1 && thang1 == 1)
    {
        namTruoc = --nam1;
        namSau = ++nam1;
        thangTruoc = 12;
        thangSau = thang1;
        ngayTruoc = 31;
        ngaySau = ++ngay1;
    }
    else if (ngay1 == 31 && thang1 == 12)
    {
        namTruoc = nam1;
        namSau = ++nam1;
        thangTruoc = thang1;
        thangSau = 1;
        ngayTruoc = --ngay1;
        ngaySau = 1;
    }
    else{
        namTruoc = nam1;
        namSau = nam1;
        thangTruoc = thang1;
        thangSau = thang1;
        ngayTruoc = --ngay1;
        ngaySau = ngay1 +2;
    }
//Kết quả
 var kqTinhNgay ="<div class='alert alert-success'>" + 
 "Ngày tháng năm trước "+ ngayTruoc + "/" + thangTruoc +"/" + namTruoc + "<br/>"+
 "Ngày tháng năm sau "+ ngaySau + "/" + thangSau +"/" + namSau +"</div>";


 // Dom tới thẻ div #ThongBaoBai4 để in ra kết quả
 document.getElementById("footerThongBaoBaiThem1").innerHTML = kqTinhNgay;    
}

//Bài2
document.getElementById("btnTinhThangNam").onclick =function(){
    // Đầu vào
    var thang2 = parseInt(document.getElementById("txtThang2").value); 
    var nam2 = parseInt(document.getElementById("txtNam2").value); 
    var ngay = 0;

    //Xử lý
    if(thang2 == 4 || thang2 == 6 || thang2 == 9 
        || thang2 == 11){
        ngay = 30;
    }else if(thang2 == 1 || thang2 == 3 || thang2 == 5 
        || thang2 == 7 || thang2 == 8 || thang2 == 10|| thang2 == 12){
        ngay = 31;
    }else if( thang2 == 2 && nam2 % 4 == 0){
        ngay = 29;
    }else{
        ngay = 28;
    }

//Kết quả
 var kqTinhNamThang ="<div class='alert alert-success'>" + 
 "Tháng đó có  "+ ngay +  " ngày" +  "</div>";


 // Dom tới thẻ div #ThongBaoBai4 để in ra kết quả
 document.getElementById("footerThongBaoBaiThem2").innerHTML = kqTinhNamThang;    
}

//Bài3
document.getElementById("btnTinhSoNguyen").onclick =function(){
    // Đầu vào
    var soNguyen = parseInt(document.getElementById("txtSoNguyen").value); 
    var soHangTram = 0;
    var gan = 0;
    var soHangChuc = 0;
    var soHangVi = 0;
    var cachDoc = "";
    //Xử lý
    soHangTram = Math.floor(soNguyen / 100);
    gan = soNguyen % 100;
    soHangChuc = Math.floor(gan / 10);
    soHangVi = gan % 10;

    if(soHangVi == 0 && soHangChuc == 0){
        cachDoc = soHangTram + " trăm ";
    }else if(soHangChuc == 0){
        cachDoc = soHangTram + " trăm linh " + soHangVi;
    }else if(soHangVi == 0){
        cachDoc = soHangTram + " trăm " + soHangChuc + " mươi ";
    }else if(soHangChuc == 1){
        cachDoc = soHangTram + " trăm " + soHangChuc + " mười "+ soHangVi;
    }else {
        cachDoc = soHangTram + " trăm " + soHangChuc + " mươi " + soHangVi;
    }

//Kết quả
 var kqTinhSoNguyen ="<div class='alert alert-success'>" + 
 cachDoc  +  "</div>";


 // Dom tới thẻ div #ThongBaoBai4 để in ra kết quả
 document.getElementById("footerThongBaoBaiThem3").innerHTML = kqTinhSoNguyen;    
}

//Bài4
document.getElementById("btnTinhToaDo").onclick =function(){
    // Đầu vào
    var XA = parseInt(document.getElementById("txtXA").value); 
    var YA = parseInt(document.getElementById("txtYA").value); 
    var XB = parseInt(document.getElementById("txtXB").value); 
    var YB = parseInt(document.getElementById("txtYB").value); 
    var XC = parseInt(document.getElementById("txtXC").value); 
    var YC = parseInt(document.getElementById("txtYC").value); 
    var XNT = parseInt(document.getElementById("txtXNT").value); 
    var YNT = parseInt(document.getElementById("txtYNT").value); 
    var CDA = 0;
    var CDB = 0;
    var CDC = 0;
    
    //Xử lý
    var ThongBaoDuongDi = "";
    CDA =  Math.sqrt(Math.pow((XNT - XA),2) + Math.pow((YNT - YA),2));
    CDB =  Math.sqrt(Math.pow((XNT - XB),2) + Math.pow((YNT - YB),2));
    CDC =  Math.sqrt(Math.pow((XNT - XC),2) + Math.pow((YNT - YC),2));
    if (CDA > CDB && CDA > CDC){
        ThongBaoDuongDi = "Sinh viên A ở xa trường nhất"
    }else if (CDB > CDA && CDB > CDC){
        ThongBaoDuongDi = "Sinh viên B ở xa trường nhất"
    }else{
        ThongBaoDuongDi = "Sinh viên C ở xa trường nhất"
    }

//Kết quả
 var kqTinhToaDo ="<div class='alert alert-success'>" + 
 ThongBaoDuongDi +  "</div>";


 // Dom tới thẻ div #ThongBaoBai4 để in ra kết quả
 document.getElementById("footerThongBaoBaiThem4").innerHTML = kqTinhToaDo;    
}
