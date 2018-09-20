#include <zookeeper/zookeeper.h>
#include "ZooKeeperManager.h"

typedef struct String_vector zoo_string;

static zhandle_t *zh;
int retval;

void my_watcher_func(zhandle_t *zzh, int type, int state, const char *path, void *watcherCtx) { }

const char* ZooKeeperManager::connect() {
    zh = zookeeper_init("localhost:2181", my_watcher_func, 2000, 0, NULL, 0);            
    if (zh == NULL) {
        zookeeper_close(zh);
        return "Failed to connect to the ZooKeeper server!";
    }

    retval = zoo_get_children(zh, "/", 0, (zoo_string *) malloc(sizeof(zoo_string)));
    if (retval != ZOK) {
        zookeeper_close(zh);
        return "Failed to connect to the ZooKeeper server!";
    }

    zookeeper_close(zh);
    return "Successfully connected to the ZooKeeper server!";
}
