# Step 1: 기본 이미지로 node를 사용
FROM node

# Step 2: 작업 디렉토리 설정
WORKDIR /app

# Step 3: package.json과 package-lock.json을 복사하여 의존성 설치만 먼저 수행
COPY package*.json ./
RUN npm install --production

# Step 4: 나머지 애플리케이션 파일을 복사
COPY ./ ./

# Step 5: 빌드 실행 (이 단계는 프로덕션용으로 최적화된 빌드를 생성)
RUN npm run build

# Step 6: React 앱이 포트를 3000에서 실행되도록 설정
EXPOSE 3000

# Step 7: React 애플리케이션을 실행
CMD ["npm", "start"]
