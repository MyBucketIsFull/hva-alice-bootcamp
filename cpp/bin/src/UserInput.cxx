#include <iostream>
#include <limits>
#include <stdio.h>
#include "UserInput.h"

using namespace std;

int UserInput::getInput(const char* question) {
    int input;

    fprintf(stderr, question);

    while (!(cin >> input)) {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        fprintf(stderr, question);
    }

    return input;
}

string UserInput::getInputString(const char* question) {
    string input;

    fprintf(stderr, question);
    cin.ignore();
    getline(cin, input);

    return input;
}