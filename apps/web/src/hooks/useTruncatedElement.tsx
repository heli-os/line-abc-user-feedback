/**
 * Copyright 2023 LINE Corporation
 *
 * LINE Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
import type { RefObject } from 'react';
import { useLayoutEffect, useState } from 'react';

const useTruncatedElement = ({ ref }: { ref: RefObject<HTMLElement> }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const { offsetHeight, scrollHeight } = ref.current;

    if (offsetHeight + 1 < scrollHeight) setIsTruncated(true);
    else setIsTruncated(false);
  }, [ref.current?.innerHTML]);

  const toggleIsShowingMore = () => setIsShowingMore((prev) => !prev);

  return {
    isTruncated,
    isShowingMore,
    toggleIsShowingMore,
  };
};
export default useTruncatedElement;
