#include <curl/curl.h>
#include <iostream>
#include "Foo.h"

int main(int argc, char** argv) {
    char input;

    std::cout << Foo::bar("Make request? ");
    std::cin >> input;
    
    if (input == 'y') {
        CURL *curl;
        CURLcode res;

        curl = curl_easy_init();
        if(curl) {
            curl_easy_setopt(curl, CURLOPT_URL, "http://example.com");
            curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);

            res = curl_easy_perform(curl);

            if(res != CURLE_OK) {
                fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));
            }

            curl_easy_cleanup(curl);
        }
    }
    
    return 0;
}
