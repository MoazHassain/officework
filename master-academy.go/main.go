package main

import (
	"fmt"
	"net/http"
	"text/template"
)

func main() {
	http.HandleFunc("/", home)
	http.Handle("/resources/", http.StripPrefix("/resources/", http.FileServer(http.Dir("./assets"))))
	http.ListenAndServe(":8888", nil)
}

func home(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("template/base.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

	// fmt.Fprintf(w, `welcome`)
}
