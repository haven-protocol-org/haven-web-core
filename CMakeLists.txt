cmake_minimum_required(VERSION 3.4.1)

project(haven-javascript-wasm)
#set(CMAKE_VERBOSE_MAKEFILE ON)
# build with exception whitelist from file
file(STRINGS wasm_exception_whitelist.txt WASM_EXCEPTION_WHITELIST)
string(REPLACE ";" "," WASM_EXCEPTION_WHITELIST "${WASM_EXCEPTION_WHITELIST}")
SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11 -Oz --bind -s DISABLE_EXCEPTION_CATCHING=2 -s EXCEPTION_CATCHING_WHITELIST='[${WASM_EXCEPTION_WHITELIST}]'")
#SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11 -Oz -pthread --bind -s DISABLE_EXCEPTION_CATCHING=2 -s EXCEPTION_CATCHING_WHITELIST='[${WASM_EXCEPTION_WHITELIST}]'")
add_definitions(-DAUTO_INITIALIZE_EASYLOGGINGPP -DNO_AES)

set(BUILD_HAVEN_OFFSHORE_WASM ON)
set(BUILD_HAVEN_OFFSHORE_KEYS_WASM OFF)



##############
# C++ bridge
##############

include_directories("src/cpp")

#####################
# haven-web-cpp
#####################

set(HAVEN_CPP "external/haven-web-cpp")
set(HAVEN_CPP_SRC "${HAVEN_CPP}/src")

# headers
include_directories("${HAVEN_CPP_SRC}")
include_directories("${HAVEN_CPP}/external/libsodium/include")
include_directories("${HAVEN_CPP}/external/libsodium/include/sodium")

##################
# haven-offshore
##################

set(HAVEN_OFFSHORE "${HAVEN_CPP}/external/haven-offshore/monero")
set(HAVEN_OFFSHORE_SRC "${HAVEN_OFFSHORE}/src")

# headers
include_directories("src/main/cpp")
include_directories("${HAVEN_OFFSHORE_SRC}/")
include_directories("${HAVEN_OFFSHORE_SRC}/checkpoints")
include_directories("${HAVEN_OFFSHORE_SRC}/common")
#include_directories("${HAVEN_OFFSHORE_SRC}/crypto")
include_directories("${HAVEN_OFFSHORE_SRC}/offshore")
#include_directories("${HAVEN_OFFSHORE_SRC}/crypto/crypto_ops_builder/include/")	# DISABLED?
#include_directories("${HAVEN_OFFSHORE_SRC}/crypto/crypto_ops_builder/include/sodium")	# DISABLED?
include_directories("${HAVEN_OFFSHORE_SRC}/cryptonote_basic")
#include_directories("${HAVEN_OFFSHORE_SRC}/multisig")
#include_directories("${HAVEN_OFFSHORE_SRC}/cryptonote_core")
#include_directories("${HAVEN_OFFSHORE_SRC}/cryptonote_protocol")
#include_directories("${HAVEN_OFFSHORE_SRC}/wallet")
#include_directories("${HAVEN_OFFSHORE_SRC}/rpc")
#include_directories("${HAVEN_OFFSHORE_SRC}/mnemonics")
include_directories("${HAVEN_OFFSHORE}/external/")
include_directories("${HAVEN_OFFSHORE}/external/easylogging++")
include_directories("${HAVEN_OFFSHORE}/external/rapidjson/include")
include_directories("${HAVEN_OFFSHORE}/external/unbound/libunbound")
include_directories("${HAVEN_OFFSHORE}/external/db_drivers/liblmdb")
include_directories("${HAVEN_OFFSHORE}/contrib/epee/include")
include_directories("${HAVEN_OFFSHORE}/contrib/epee/include/net")

#include_directories("${CMAKE_CURRENT_BINARY_DIR}")
#include_directories("${HAVEN_OFFSHORE_SRC}/wallet/api")

if (CMAKE_HOST_APPLE)
    include_directories("${HAVEN_OFFSHORE}/build/Darwin/release-v0.16/release/translations")
else()
    include_directories("${HAVEN_OFFSHORE}/build/release/translations")
endif()

#############
# OpenSSL
#############

#find_package(OpenSSL REQUIRED)
#message(STATUS "Using OpenSSL include dir at ${OPENSSL}")

set(OPENSSL ${CMAKE_SOURCE_DIR}/build/openssl)
include_directories("${OPENSSL}")
include_directories("${OPENSSL}/include") # must exist already - run bin/build-openssl-emscripten.sh

add_library(openssl_crypto STATIC IMPORTED)
set_target_properties(
    openssl_crypto PROPERTIES IMPORTED_LOCATION
    ${OPENSSL}/lib/libcrypto.a
)

add_library(openssl_ssl STATIC IMPORTED)
set_target_properties(
    openssl_ssl PROPERTIES IMPORTED_LOCATION
    ${OPENSSL}/lib/libssl.a
)

#############
# Boost
#############

set(BOOST ${CMAKE_SOURCE_DIR}/build/boost)
include_directories("${BOOST}")
include_directories("${BOOST}/include") # must exist already - run bin/build-boost-emscripten.sh

add_library(boost_chrono STATIC IMPORTED)
set_target_properties(
    boost_chrono PROPERTIES IMPORTED_LOCATION
    ${BOOST}/lib/libboost_chrono.a
)

add_library(boost_system STATIC IMPORTED)
set_target_properties(
    boost_system PROPERTIES IMPORTED_LOCATION
    ${BOOST}/lib/libboost_system.a
)

add_library(boost_thread STATIC IMPORTED)
set_target_properties(
    boost_thread PROPERTIES IMPORTED_LOCATION
    ${BOOST}/lib/libboost_thread.a
)

add_library(boost_serialization STATIC IMPORTED)
set_target_properties(
    boost_serialization PROPERTIES IMPORTED_LOCATION
    ${BOOST}/lib/libboost_serialization.a
)

add_library(boost_filesystem STATIC IMPORTED)
set_target_properties(
    boost_filesystem PROPERTIES IMPORTED_LOCATION
    ${BOOST}/lib/libboost_filesystem.a
)

add_library(boost_regex STATIC IMPORTED)
set_target_properties(
    boost_regex PROPERTIES IMPORTED_LOCATION
    ${BOOST}/lib/libboost_regex.a
)

#add_library(boost_atomic STATIC IMPORTED)
#set_target_properties(
    #boost_atomic PROPERTIES IMPORTED_LOCATION
    #${BOOST}/lib/libboost_atomic.a
#)

################################
# Keys-only wallet source files
################################

set(
    HAVEN_OFFSHORE_KEYS_SRC_FILES
    
    # monero-javascript WASM bridge
    src/main/cpp/index.cpp
    src/main/cpp/monero_wasm_bridge.cpp
    
    # haven-web-cpp (modified for WASM)
    ${HAVEN_CPP_SRC}/utils/monero_utils.cpp
    ${HAVEN_CPP_SRC}/daemon/monero_daemon_model.cpp
    ${HAVEN_CPP_SRC}/wallet/monero_wallet_model.cpp
    ${HAVEN_CPP_SRC}/wallet/monero_wallet_keys.cpp
    ${HAVEN_CPP}/external/libsodium/src/crypto_verify/verify.c
    
    # monero-project (modified for WASM)
    ${HAVEN_OFFSHORE_SRC}/cryptonote_basic/cryptonote_basic_impl.cpp
    ${HAVEN_OFFSHORE_SRC}/cryptonote_basic/account.cpp
    ${HAVEN_OFFSHORE_SRC}/cryptonote_basic/cryptonote_format_utils.cpp
    ${HAVEN_OFFSHORE_SRC}/crypto//cn_slow_hash_soft.cpp
    ${HAVEN_OFFSHORE_SRC}/crypto/cn_slow_hash_hard_intel.cpp
    ${HAVEN_OFFSHORE_SRC}/crypto/crypto.cpp
    ${HAVEN_OFFSHORE_SRC}/crypto/hash.c
    ${HAVEN_OFFSHORE_SRC}/crypto/slow-hash.c
    ${HAVEN_OFFSHORE_SRC}/crypto/oaes_lib.c
    ${HAVEN_OFFSHORE_SRC}/crypto/crypto-ops.c
    ${HAVEN_OFFSHORE_SRC}/crypto/crypto-ops-data.c
    ${HAVEN_OFFSHORE_SRC}/crypto/keccak.c
    ${HAVEN_OFFSHORE_SRC}/crypto/chacha.c
    ${HAVEN_OFFSHORE_SRC}/crypto/random.c
    ${HAVEN_OFFSHORE_SRC}/crypto/aesb.c
    ${HAVEN_OFFSHORE_SRC}/crypto/tree-hash.c
    ${HAVEN_OFFSHORE_SRC}/crypto/hash-extra-blake.c
    ${HAVEN_OFFSHORE_SRC}/crypto/blake256.c
    ${HAVEN_OFFSHORE_SRC}/crypto/hash-extra-groestl.c
    ${HAVEN_OFFSHORE_SRC}/crypto/hash-extra-jh.c
    ${HAVEN_OFFSHORE_SRC}/crypto/hash-extra-skein.c
    ${HAVEN_OFFSHORE_SRC}/crypto/groestl.c
    ${HAVEN_OFFSHORE_SRC}/crypto/jh.c
    ${HAVEN_OFFSHORE_SRC}/crypto/skein.c
    ${HAVEN_OFFSHORE_SRC}/cryptonote_core/cryptonote_tx_utils.cpp
    ${HAVEN_OFFSHORE}/contrib/epee/src/hex.cpp
    ${HAVEN_OFFSHORE}/contrib/epee/src/string_tools.cpp
    ${HAVEN_OFFSHORE}/contrib/epee/src/memwipe.c
    ${HAVEN_OFFSHORE}/contrib/epee/src/mlocker.cpp
    ${HAVEN_OFFSHORE}/contrib/epee/src/wipeable_string.cpp
    ${HAVEN_OFFSHORE_SRC}/common/base58.cpp
    ${HAVEN_OFFSHORE_SRC}/device/device.cpp
    ${HAVEN_OFFSHORE_SRC}/device/device_default.cpp
    ${HAVEN_OFFSHORE_SRC}/multisig/multisig.cpp
    ${HAVEN_OFFSHORE_SRC}/ringct/rctOps.cpp
    ${HAVEN_OFFSHORE_SRC}/ringct/rctTypes.cpp
    ${HAVEN_OFFSHORE_SRC}/ringct/rctCryptoOps.c
    ${HAVEN_OFFSHORE_SRC}/ringct/rctSigs.cpp
    ${HAVEN_OFFSHORE_SRC}/ringct/bulletproofs.cc
    ${HAVEN_OFFSHORE_SRC}/ringct/multiexp.cc
    ${HAVEN_OFFSHORE_SRC}/mnemonics/electrum-words.cpp
    ${HAVEN_OFFSHORE}/external/easylogging++/easylogging++.cc
)

################################
# Core wallet source files
################################

set(
    HAVEN_OFFSHORE_SRC_FILES
    
    # monero-javascript WASM bridge
    src/main/cpp/http_client_wasm.cpp
    
    # haven-web-cpp (modified for WASM)
    ${HAVEN_CPP_SRC}/wallet/monero_wallet_core.cpp
    
    # monero-project (modified for WASM)
    ${HAVEN_OFFSHORE}/external/db_drivers/liblmdb/mdb.c
    ${HAVEN_OFFSHORE}/external/db_drivers/liblmdb/midl.c
    ${HAVEN_OFFSHORE}/contrib/epee/src/abstract_http_client.cpp
    #${HAVEN_OFFSHORE}/contrib/epee/src/http_auth.cpp
    ${HAVEN_OFFSHORE_SRC}/wallet/wallet2.cpp
    ${HAVEN_OFFSHORE_SRC}/wallet/message_store.cpp
    ${HAVEN_OFFSHORE_SRC}/wallet/message_transporter.cpp
    ${HAVEN_OFFSHORE_SRC}/wallet/node_rpc_proxy.cpp
    ${HAVEN_OFFSHORE_SRC}/offshore/pricing_record.cpp
    ${HAVEN_OFFSHORE_SRC}/rpc/rpc_payment_signature.cpp
    ${HAVEN_OFFSHORE_SRC}/wallet/wallet_rpc_payments.cpp
    #${HAVEN_OFFSHORE_SRC}/blockchain_db/lmdb/db_lmdb.cpp
    ${HAVEN_OFFSHORE_SRC}/cryptonote_core/cryptonote_tx_utils.cpp
    ${HAVEN_OFFSHORE_SRC}/checkpoints/checkpoints.cpp
    ${HAVEN_OFFSHORE_SRC}/common/perf_timer.cpp
    ${HAVEN_OFFSHORE_SRC}/common/threadpool.cpp
    ${HAVEN_OFFSHORE_SRC}/common/aligned.c
    ${HAVEN_OFFSHORE_SRC}/common/util.cpp
    ${HAVEN_OFFSHORE_SRC}/common/i18n.cpp
    ${HAVEN_OFFSHORE_SRC}/common/combinator.cpp
    #${HAVEN_OFFSHORE_SRC}/rpc/rpc_payment_signature.cpp
    ${HAVEN_OFFSHORE_SRC}/wallet/ringdb.cpp
    ${HAVEN_OFFSHORE_SRC}/cryptonote_basic/miner.cpp
    ${HAVEN_OFFSHORE_SRC}/cryptonote_basic/difficulty.cpp
    ${HAVEN_OFFSHORE_SRC}/cryptonote_core/tx_sanity_check.cpp
)

####################
# Build parameters
####################

#-s USE_PTHREADS=1 \
#-s PTHREAD_POOL_SIZE=2 \
#-s PROXY_TO_PTHREAD \
#-s DISABLE_EXCEPTION_CATCHING=0 \
#-s ASYNCIFY=1 \
#-s 'ASYNCIFY_IMPORTS=[\"js_send_json_request\",\"js_send_binary_request\",\"emscripten_sleep\"]' \
#-s ALLOW_MEMORY_GROWTH=0 \
#-s INITIAL_MEMORY=1536MB \

set (
EMCC_LINKER_FLAGS_BASE

# unsure if the -I...boost..include is necessary here due to include above
# TODO? does EXPORT_NAME need to be the same for both targets? (or should it be set per-target with …_WASM, …_ASMJS?)

"-Wall -Werror -std=c++11 -Oz \
--bind -s MODULARIZE=1 \
-s 'EXPORT_NAME=\"haven_javascript\"' \
-s ERROR_ON_UNDEFINED_SYMBOLS=0 \
-s ASSERTIONS=0 \
-s EXIT_RUNTIME=0 \
-s PRECISE_F32=1 \
-s EXCEPTION_DEBUG=0 \
-s DEMANGLE_SUPPORT=0 \
-s NO_DYNAMIC_EXECUTION=1 \
-s NODEJS_CATCH_EXIT=0 \
-s RESERVED_FUNCTION_POINTERS=5 \
-s EXPORTED_RUNTIME_METHODS='[\"UTF8ToString\",\"stringToUTF8\",\"lengthBytesUTF8\",\"intArrayToString\",\"makeBigInt\",\"getTempRet0\",\"addFunction\"]' \
-s WASM=1 \
-s ALLOW_MEMORY_GROWTH=1 \
-g0 \ "
    # • Disabling exception catching does not introduce silent failures 
    # • Probably don't need PRECISE_F32 but wouldn't want to not use it
    #
    #
    # -s SAFE_HEAP=1 \
    # -g \
)

set(
EMCC_LINKER_FLAGS_CORE_KEYS
"${EMCC_LINKER_FLAGS_BASE} \
"
)

set(
EMCC_LINKER_FLAGS_CORE
"${EMCC_LINKER_FLAGS_BASE} \
-s ASYNCIFY=1 \
-s 'ASYNCIFY_IMPORTS=[\"js_send_json_request\",\"js_send_binary_request\",\"emscripten_sleep\"]' \
"
)

message(STATUS "EMCC_LINKER_FLAGS_CORE_KEYS ${EMCC_LINKER_FLAGS_CORE_KEYS}")
message(STATUS "EMCC_LINKER_FLAGS_CORE ${EMCC_LINKER_FLAGS_CORE}")

####################
# Build targets
####################

if (BUILD_HAVEN_OFFSHORE_KEYS_WASM)
	add_executable(haven_offshore_keys ${HAVEN_OFFSHORE_KEYS_SRC_FILES})
	set_target_properties(haven_offshore_keys PROPERTIES LINK_FLAGS "${EMCC_LINKER_FLAGS_CORE_KEYS}")
	target_link_libraries(
	    haven_offshore_keys
	    #
	    boost_chrono
	    boost_system
	    boost_thread
	    #
	    ${log-lib}
	)
endif()

if (BUILD_HAVEN_OFFSHORE_WASM)
	add_executable($ENV{HAVEN_OFFSHORE_NAME} ${HAVEN_OFFSHORE_SRC_FILES} ${HAVEN_OFFSHORE_KEYS_SRC_FILES})
	set_target_properties($ENV{HAVEN_OFFSHORE_NAME}  PROPERTIES LINK_FLAGS "${EMCC_LINKER_FLAGS_CORE}")
	target_compile_definitions($ENV{HAVEN_OFFSHORE_NAME}  PRIVATE BUILD_CORE_WALLET=1)
	target_link_libraries(
	    $ENV{HAVEN_OFFSHORE_NAME} 
	    #
	    #openssl_ssl
	    #openssl_crypto
	    #
	    boost_chrono
	    boost_system
	    boost_thread
	    boost_serialization
	    #boost_filesystem
	    boost_regex
	    #boost_atomic
	    #
	    ${log-lib}
	)
endif()

# build to bitcode instead of wasm
#SET(CMAKE_EXECUTABLE_SUFFIX ".bc")	
