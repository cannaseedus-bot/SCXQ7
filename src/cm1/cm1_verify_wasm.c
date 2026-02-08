#include <stdint.h>

// CM-1 verifier: returns 0 on PASS, 1 on FAIL.
int32_t verify(const uint8_t *data, uint32_t len) {
  if (!data || len < 6) {
    return 1;
  }
  if (data[0] != 0x01 || data[1] != 0x02) {
    return 1;
  }
  if (data[len - 2] != 0x03 || data[len - 1] != 0x04) {
    return 1;
  }

  uint32_t body_len = len - 4;
  if (body_len == 0 || (body_len % 3) != 0) {
    return 1;
  }

  for (uint32_t i = 2; i < len - 2; i += 3) {
    if (data[i] != 0x0E || data[i + 1] != 0x1E || data[i + 2] != 0x0F) {
      return 1;
    }
  }

  return 0;
}
