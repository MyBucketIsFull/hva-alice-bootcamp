#include <curl/curl.h>
#include <iostream>
#include <sstream>
#include <string>
#include "Rest.h"
#include "UserInput.h"

using namespace std;
using namespace UserInput;

enum Method { Get, Post, Put, Patch, Delete };

string url = "localhost:3000";
string users = "/users";
string like = "/like";
string pathMessages = "/messages";
string vote = "/vote";

void outputMessageRes(const char* message) {
    if (message[0] != '\0') {
        fprintf(stderr, "-- %s --\n", message);
    }
}

const char* sendRequest(Method method, string path, string body = "") {
    const char* message;
    CURL *curl;
    CURLcode res;

    curl = curl_easy_init();

    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, path.c_str());
        
        switch (method) {
            case Put:
                curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "PUT");
                break;

            case Delete:
                curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "DELETE");
                break;

            case Patch:
                curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "PATCH");
                break;
        
            default:
                break;
        }

        if (!body.empty()) {
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, &body[0u]);
        }

        res = curl_easy_perform(curl);

        if (res != CURLE_OK) {
            fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));
            message = "FAILED API!";
        } else {
            message = "Successfully API!";
        }

        curl_easy_cleanup(curl);

    } else {
        message = "FAILED API!";
    }

    curl_global_cleanup();
    cout << endl;
    return message;
}


// Users path

const char* getUsers() {
    Method method = Get;
    string path = url + users;
    return sendRequest(method, path);
}

const char* getUser(int id) {
    ostringstream idStr;
    idStr << id;

    Method method = Get;
    string path = url + users + "/" + idStr.str();
    return sendRequest(method, path);
}

const char* createUser(string name) {
    Method method = Post;
    string path = url + users;
    string body = "name=" + name;
    return sendRequest(method, path, body);
}

const char* updateUser(string name, int id) {
    ostringstream idStr;
    idStr << id;

    Method method = Put;
    string path = url + users + "/" + idStr.str();
    string body = "name=" + name;
    return sendRequest(method, path, body);
}

const char* deleteUser(int id) {
    ostringstream idStr;
    idStr << id;

    Method method = Delete;
    string path = url + users + "/" + idStr.str();
    return sendRequest(method, path);
}

const char* likeUser(int id) {
    ostringstream idStr;
    idStr << id;

    Method method = Patch;
    string path = url + users + "/" + idStr.str() + like;
    return sendRequest(method, path);
}

void enterUsers() {
    bool didNotExit = true;
    const char* message;

    while (didNotExit) {

        switch (getInput("What would you like to do?\n(1) Get all users.\n(2) Get user.\n(3) Create user.\n(4) Update user.\n(5) Delete user.\n(6) Like user.\n(0) Exit.\n")) {
            case 1:
                message = getUsers();
                break;

            case 2:
                message = getUser(getInput("Enter id: "));
                break;

            case 3:
                message = createUser(getInputString("Enter name: "));
                break;

            case 4:
                message = updateUser(getInputString("Enter name: "), getInput("Enter id: "));
                break;

            case 5:
                message = deleteUser(getInput("Enter id: "));
                break;

            case 6:
                message = likeUser(getInput("Enter id: "));
                break;

            case 0:
                didNotExit = false;
                message = "";
                break;
        
            default:
                message = "";
                break;
        }

        outputMessageRes(message);
    }
}


// Messages path

const char* getMessages() {
    Method method = Get;
    string path = url + pathMessages;
    return sendRequest(method, path);
}

const char* getMessage(int id) {
    ostringstream idStr;
    idStr << id;

    Method method = Get;
    string path = url + pathMessages + "/" + idStr.str();
    return sendRequest(method, path);
}

const char* createMessage(string text, int userId) {
    ostringstream userIdStr;
    userIdStr << userId;

    Method method = Post;
    string path = url + pathMessages;
    string body = "text=" + text + "&user_id=" + userIdStr.str();
    return sendRequest(method, path, body);
}

const char* updateMessage(string text, int id) {
    ostringstream idStr;
    idStr << id;

    Method method = Put;
    string path = url + pathMessages + "/" + idStr.str();
    string body = "text=" + text;
    return sendRequest(method, path, body);
}

const char* deleteMessage(int id) {
    ostringstream idStr;
    idStr << id;

    Method method = Delete;
    string path = url + pathMessages + "/" + idStr.str();
    return sendRequest(method, path);
}

const char* voteMessage(int userId, int id) {
    ostringstream userIdStr;
    userIdStr << userId;

    ostringstream idStr;
    idStr << id;

    Method method = Patch;
    string path = url + pathMessages + "/" + idStr.str() + vote;
    string body = "user_id=" + userIdStr.str();
    return sendRequest(method, path);
}

void enterMessages() {
    bool didNotExit = true;
    const char* message;

    while (didNotExit) {

        switch (getInput("What would you like to do?\n(1) Get all messages.\n(2) Get message.\n(3) Create message.\n(4) Update message.\n(5) Delete message.\n(6) Vote message.\n(0) Exit.\n")) {
            case 1:
                message = getMessages();
                break;

            case 2:
                message = getMessage(getInput("Enter id: "));
                break;

            case 3:
                message = createMessage(getInputString("Enter text: "), getInput("Enter user id: "));
                break;

            case 4:
                message = updateMessage(getInputString("Enter text: "), getInput("Enter id: "));
                break;

            case 5:
                message = deleteMessage(getInput("Enter id: "));
                break;

            case 6:
                message = voteMessage(getInput("Enter user id: "), getInput("Enter id: "));
                break;

            case 0:
                didNotExit = false;
                message = "";
                break;
        
            default:
                message = "";
                break;
        }

        outputMessageRes(message);
    }
}



void Rest::initCurl() {
    curl_global_init(CURL_GLOBAL_DEFAULT);
}

void Rest::enterRest() {
    bool didNotExit = true;
    const char* message;

    while (didNotExit) {

        switch (getInput("To which route would you like to send requests?\n(1) Users.\n(2) Messages.\n(0) Exit.\n")) {
            case 1:
                enterUsers();
                message = "";
                break;

            case 2:
                enterMessages();
                message = "";
                break;

            case 0:
                didNotExit = false;
                message = "";
                break;
        
            default:
                message = "";
                break;
        }

        outputMessageRes(message);

    }
}
