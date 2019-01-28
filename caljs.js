<script type='text/javascript'>
 var dN = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
 var pN = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];
 var mN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
 chgMth(2, 0);
 chgClk();

 function chgMth(i, y) {
  dT = new Date();
  if (i == 0) {
   yR -= y;
  }
  if (i == 1) {
   if (mT > 0) {
    mT--;
   }
   else {
    if (yR == 100) {
     mT = 0;
    }
    else {
     mT = 11;
     yR--;
    }
   }
  }
  if (i == 2) {
   mT = dT.getMonth();
   yR = dT.getFullYear();
  };
  if (i == 3) {
   if (mT < 11) {
    mT++;
   }
   else {
    if (yR == 250000) {
     mT = 11;
    }
    else {
     mT = 0;
     yR++;
    }
   }
  }
  if (i == 4) {
   yR += y;
  }
  if (yR > 250000) {
   yR = 250000;
  }
  if (yR < 100) {
   yR = 100;
  }
  for (CnT = 0; CnT <= 36; CnT++) {
   document.getElementById("iD" + CnT).style.backgroundColor = "#f9f9f9";
  }
  bD = new Date(yR, mT, 1).getDay();
  mD = new Date(yR, mT, 0).getDate() - (bD - 1);
  for (bR = 0; bR < bD; bR++) {
   document.getElementById("iD" + bR).innerHTML = "<font style='font-size:20px;color:gray;'>" + mD + "</font>";
   mD++;
  }
  for (aD = 1; aD <= new Date(yR, (mT + 1), 0).getDate(); aD++) {
   pS = (((new Date(yR, mT, aD).getTime() - new Date(100, 0, 1).getTime()) / (24 * 60 * 60 * 1000)) % 5);
   document.getElementById("iD" + bD).innerHTML = "<font style='font-size:28px;'>" + aD + "</font><br/>" +  pN[Math.floor(pS)];
   if (aD == dT.getDate() & mT == dT.getMonth() & yR == dT.getFullYear()) {
    document.getElementById("iD" + bD).style.backgroundColor = "#ffff66";
   }
   bD++;
  }
  mTyR.innerHTML = "<font onClick='chgMth(2,0);' style='cursor:pointer;' title='" + mN[dT.getMonth()] + " " + dT.getFullYear() + "'>" + mN[mT] + " " + yR + "</font>";
  for (vD = 1; bD <= 36; vD++) {
   document.getElementById("iD" + bD).innerHTML = "<font style='font-size:20px;color:gray;'>" + vD + "</font>";
   bD++;
  }
 }

 function chgClk() {
  dTcL = new Date();
  hRcL = dTcL.getHours();
  mNcL = dTcL.getMinutes();
  sCcL = dTcL.getSeconds();
  dYcL = dTcL.getDate();
  mTcL = dTcL.getMonth();
  yRcL = dTcL.getFullYear();
  if (mTcL == 7) {
   mMcL = "Ags";
  } else {
   mMcL = mN[mTcL].substr(0, 3);
  }
  if (dYcL < 10) {
   dYcL = "0" + dYcL;
  }
  if (hRcL < 10) {
   hRcL = "0" + hRcL;
  }
  if (mNcL < 10) {
   mNcL = "0" + mNcL;
  }
  if (sCcL < 10) {
   sCcL = "0" + sCcL;
  }
  if (showDate.innerHTML != [dYcL, mMcL, yRcL].join(" ")) {
   chgMth(5, 0);
  }
  pScL = (((new Date(yRcL, mTcL, dYcL).getTime() - new Date(100, 0, 1).getTime()) / (24 * 60 * 60 * 1000)) % 5);
  showClock.innerHTML = [hRcL, mNcL, sCcL].join(":");
  showDate.innerHTML = [dYcL, mMcL, yRcL].join(" ");
  showDay.innerHTML = dN[dTcL.getDay()] + " " + pN[Math.floor(pScL)];
  setTimeout("chgClk()", 200);
 };
</script>
