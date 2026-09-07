// ==========================================
// ARCHIVE READER
// READER SYSTEM
// ==========================================


// ------------------------------------------
// PROGRESS MEMBACA
// ------------------------------------------

window.addEventListener("scroll", function () {

    const progressBar =
        document.getElementById("progressBar");

    if (!progressBar) return;

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width =
        progress + "%";

});


// ------------------------------------------
// UKURAN FONT
// ------------------------------------------

let fontSize =
    localStorage.getItem("readerFontSize");

if (!fontSize) {
    fontSize = 18;
}

fontSize = Number(fontSize);


function updateFontSize() {

    const chapters =
        document.querySelectorAll(".chapter p");

    chapters.forEach(function (paragraph) {

        paragraph.style.fontSize =
            fontSize + "px";

    });

    localStorage.setItem(
        "readerFontSize",
        fontSize
    );
}


const increaseFont =
    document.getElementById("increaseFont");

const decreaseFont =
    document.getElementById("decreaseFont");


if (increaseFont) {

    increaseFont.addEventListener(
        "click",
        function () {

            if (fontSize < 30) {

                fontSize += 1;

                updateFontSize();

            }

        }
    );

}


if (decreaseFont) {

    decreaseFont.addEventListener(
        "click",
        function () {

            if (fontSize > 14) {

                fontSize -= 1;

                updateFontSize();

            }

        }
    );

}


updateFontSize();


// ------------------------------------------
// DARK MODE
// ------------------------------------------

const darkMode =
    document.getElementById("darkMode");


let dark =
    localStorage.getItem("darkMode");


if (dark === "true") {

    document.body.classList.add(
        "dark-mode"
    );

}


if (darkMode) {

    darkMode.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );

            const enabled =
                document.body.classList.contains(
                    "dark-mode"
                );

            localStorage.setItem(
                "darkMode",
                enabled
            );

        }
    );

}


// ------------------------------------------
// BOOKMARK
// ------------------------------------------

const bookmarkBtn =
    document.getElementById("bookmarkBtn");


if (bookmarkBtn) {

    bookmarkBtn.addEventListener(
        "click",
        function () {

            localStorage.setItem(
                "gaziBookmark",
                window.scrollY
            );

            bookmarkBtn.textContent =
                "✓";

            setTimeout(function () {

                bookmarkBtn.textContent =
                    "🔖";

            }, 1500);

        }
    );

}


// ------------------------------------------
// CARI DALAM BUKU
// ------------------------------------------

const searchBtn =
    document.getElementById("searchBtn");

const searchBox =
    document.getElementById("searchBox");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        function () {

            searchBox.classList.add(
                "active"
            );

            searchInput.focus();

        }
    );

}


if (closeSearch) {

    closeSearch.addEventListener(
        "click",
        function () {

            searchBox.classList.remove(
                "active"
            );

            searchInput.value = "";

        }
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
                &&
                searchInput.value.trim() !== ""
            ) {

                findText(
                    searchInput.value.trim()
                );

            }

        }
    );

}


function findText(text) {

    window.find(
        text,
        false,
        false,
        true,
        false,
        false,
        false
    );

}


// ------------------------------------------
// KEMBALI KE BOOKMARK
// ------------------------------------------

const savedPosition =
    localStorage.getItem(
        "gaziBookmark"
    );


if (savedPosition) {

    console.log(
        "Bookmark tersedia di posisi:",
        savedPosition
    );

}