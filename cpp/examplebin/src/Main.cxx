#include <curl/curl.h>
#include <iostream>
#include <limits>
#include "Foo.h"
#include <zookeeper/zookeeper.h>

using namespace std;

typedef struct String_vector zoo_string;  

static zhandle_t *zh;
int retval;
bool didNotExit = true;

void my_watcher_func(zhandle_t *zzh, int type, int state, const char *path, void *watcherCtx) { }

const char* question = "What would you like to do?\n(1) Access Nest API.\n(2) Test ZooKeeper connectivity.\n(0) Exit.\n";

int doAskInput() {
    int input;

    fprintf(stderr, question);

    while (!(cin >> input)) {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        fprintf(stderr, question);
    }

    return input;
}

void outputMessage(const char* message) {
    fprintf(stderr, "-- %s --\n", message);
}

void exitAfterZooKeepFailure() {
    zookeeper_close(zh);
    outputMessage("Failed to connect to the ZooKeeper server!");
}

void exitAfterZooKeepSuccess() {
    zookeeper_close(zh);
    outputMessage("Successfully connected to the ZooKeeper server!");
}

void doNest() {
    CURL *curl;
    CURLcode res;

    curl = curl_easy_init();

    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "http://example.com");
        curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);

        res = curl_easy_perform(curl);

        if (res != CURLE_OK) {
            fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));
        }

        curl_easy_cleanup(curl);

        outputMessage("Successfully API!");
        return;
    }

    outputMessage("FAILED API!");
}

void doZooKeeper() {
    zh = zookeeper_init("localhost:2181", my_watcher_func, 2000, 0, NULL, 0);            
    if (zh == NULL) {
        exitAfterZooKeepFailure();
        return;
    }

    retval = zoo_get_children(zh, "/", 0, (zoo_string *) malloc(sizeof(zoo_string)));
    if (retval != ZOK) {
        exitAfterZooKeepFailure();
        return;
    }

    exitAfterZooKeepSuccess();
}

void doTerminate() {
    didNotExit = false;
    outputMessage("Successfully terminated program!");
}

int main(int argc, char** argv) {
    while (didNotExit) {

        switch (doAskInput()) {
            case 1:
                doNest();
                break;

            case 2:
                doZooKeeper();
                break;

            case 0:
                doTerminate();
                break;
        
            default:
                break;
        }

    }

    return 0;
}
