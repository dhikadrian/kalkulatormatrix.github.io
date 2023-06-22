document.addEventListener("DOMContentLoaded", function () {
  // Operasi penjumlahan
  document.getElementById("addBtn").addEventListener("click", function () {
    performOperation("add");
  });

  // Operasi pengurangan
  document.getElementById("subBtn").addEventListener("click", function () {
    performOperation("sub");
  });

  // Operasi perkalian
  document.getElementById("mulBtn").addEventListener("click", function () {
    performOperation("mul");
  });

  function performOperation(operation) {
    // Mendapatkan nilai matriks A
    let a11 = parseFloat(document.getElementById("a11").value);
    let a12 = parseFloat(document.getElementById("a12").value);
    let a13 = parseFloat(document.getElementById("a13").value);
    let a21 = parseFloat(document.getElementById("a21").value);
    let a22 = parseFloat(document.getElementById("a22").value);
    let a23 = parseFloat(document.getElementById("a23").value);
    let a31 = parseFloat(document.getElementById("a31").value);
    let a32 = parseFloat(document.getElementById("a32").value);
    let a33 = parseFloat(document.getElementById("a33").value);

    // Mendapatkan nilai matriks B
    let b11 = parseFloat(document.getElementById("b11").value);
    let b12 = parseFloat(document.getElementById("b12").value);
    let b13 = parseFloat(document.getElementById("b13").value);
    let b21 = parseFloat(document.getElementById("b21").value);
    let b22 = parseFloat(document.getElementById("b22").value);
    let b23 = parseFloat(document.getElementById("b23").value);
    let b31 = parseFloat(document.getElementById("b31").value);
    let b32 = parseFloat(document.getElementById("b32").value);
    let b33 = parseFloat(document.getElementById("b33").value);

    // Melakukan operasi sesuai yang dipilih
    let result;
    if (operation === "add") {
      result = [
        [a11 + b11, a12 + b12, a13 + b13],
        [a21 + b21, a22 + b22, a23 + b23],
        [a31 + b31, a32 + b32, a33 + b33],
      ];
    } else if (operation === "sub") {
      result = [
        [a11 - b11, a12 - b12, a13 - b13],
        [a21 - b21, a22 - b22, a23 - b23],
        [a31 - b31, a32 - b32, a33 - b33],
      ];
    } else if (operation === "mul") {
      result = [
        [
          a11 * b11 + a12 * b21 + a13 * b31,
          a11 * b12 + a12 * b22 + a13 * b32,
          a11 * b13 + a12 * b23 + a13 * b33,
        ],
        [
          a21 * b11 + a22 * b21 + a23 * b31,
          a21 * b12 + a22 * b22 + a23 * b32,
          a21 * b13 + a22 * b23 + a23 * b33,
        ],
        [
          a31 * b11 + a32 * b21 + a33 * b31,
          a31 * b12 + a32 * b22 + a33 * b32,
          a31 * b13 + a32 * b23 + a33 * b33,
        ],
      ];
    }

    // Menampilkan hasil operasi pada tabel hasil
    document.getElementById("r11").textContent = result[0][0];
    document.getElementById("r12").textContent = result[0][1];
    document.getElementById("r13").textContent = result[0][2];
    document.getElementById("r21").textContent = result[1][0];
    document.getElementById("r22").textContent = result[1][1];
    document.getElementById("r23").textContent = result[1][2];
    document.getElementById("r31").textContent = result[2][0];
    document.getElementById("r32").textContent = result[2][1];
    document.getElementById("r33").textContent = result[2][2];
  }
});
