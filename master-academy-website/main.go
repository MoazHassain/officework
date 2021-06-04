package main

import (
	"fmt"
	"net/http"
	"text/template"
)

func main() {
	http.HandleFunc("/", home)
	http.HandleFunc("/sign-up", signUp)
	http.HandleFunc("/sign-in", signIn)
	http.HandleFunc("/course-catalog", courseCatalog)
	http.HandleFunc("/course-detail", courseDetail)
	http.HandleFunc("/blog", blog)
	http.HandleFunc("/mycourses", mycourses)
	http.HandleFunc("/certification-training", certificationTraining)
	http.HandleFunc("/video-lecture", videoLecture)
	http.HandleFunc("/pre-requisites", preRequisite)
	http.HandleFunc("/lecture", lecture)
	http.HandleFunc("/course-content", courseContent)
	http.HandleFunc("/class-record", classRecord)
	http.HandleFunc("/personal-library", library)
	http.HandleFunc("/my-lab", lab)
	http.HandleFunc("/lecture-library", lectureLibrary)
	http.HandleFunc("/lecture-two", lectureVideoes)

	http.Handle("/resources/", http.StripPrefix("/resources/", http.FileServer(http.Dir("./assets"))))
	http.ListenAndServe(":8888", nil)
}

func home(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("template/base.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func signUp(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("template/base.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/sign-up.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func signIn(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("template/base.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/sign-in.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func courseCatalog(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("template/base.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/course-catalog.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func courseDetail(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("template/base.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/course-detail.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func blog(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("template/base.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/blog.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func mycourses(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("template/mycourses.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func certificationTraining(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("template/mycourses.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/certification-training.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func videoLecture(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("template/mycourses.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/video-lecture.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func preRequisite(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("wpage/certification-training.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/c-t-prerequisite.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func lecture(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("wpage/certification-training.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/c-t-lecture.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func courseContent(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("wpage/certification-training.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/c-t-content.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func classRecord(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("wpage/certification-training.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/c-t-record.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func library(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("wpage/certification-training.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/c-t-library.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func lab(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("wpage/certification-training.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/c-t-lab.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func lectureLibrary(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("wpage/video-lecture.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/lecture-library.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}

func lectureVideoes(w http.ResponseWriter, r *http.Request) {

	ptmp, err := template.ParseFiles("wpage/video-lecture.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp, err = ptmp.ParseFiles("wpage/lectures.gohtml")
	if err != nil {
		fmt.Println(err.Error())
	}

	ptmp.Execute(w, nil)

}
