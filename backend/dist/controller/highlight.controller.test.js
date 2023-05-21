"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const request = require("supertest");
const app_module_1 = require("../app.module");
const mongoose_1 = require("@nestjs/mongoose");
describe('HighlightController (e2e)', () => {
    let app;
    let highlightModel;
    beforeAll(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [app_module_1.HighlightModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
        highlightModel = moduleFixture.get((0, mongoose_1.getModelToken)('Highlight'));
    });
    afterAll(async () => {
        await app.close();
    });
    afterEach(async () => {
        await highlightModel.deleteMany({});
    });
    describe('/api/v1/highlight (GET)', () => {
        it('should return all highlights', async () => {
            const highlight1 = await highlightModel.create({
                highlightedText: 'Highlight 1',
                webpage: 'http://example.com',
                summary: 'Summary 1',
            });
            const highlight2 = await highlightModel.create({
                highlightedText: 'Highlight 2',
                webpage: 'http://example.com',
                summary: 'Summary 2',
            });
            const response = await request(app.getHttpServer()).get('/api/v1/highlight');
            expect(response.status).toBe(200);
            expect(response.body).toEqual([
                {
                    id: highlight1.id,
                    highlightedText: 'Highlight 1',
                    webpage: 'http://example.com',
                    summary: 'Summary 1',
                },
                {
                    id: highlight2.id,
                    highlightedText: 'Highlight 2',
                    webpage: 'http://example.com',
                    summary: 'Summary 2',
                },
            ]);
        });
        it('should return an empty array if no highlights exist', async () => {
            const response = await request(app.getHttpServer()).get('/api/v1/highlight');
            expect(response.status).toBe(200);
            expect(response.body).toEqual([]);
        });
    });
    describe('/api/v1/highlight (POST)', () => {
        it('should create a new highlight', async () => {
            const response = await request(app.getHttpServer())
                .post('/api/v1/highlight')
                .send({
                highlightedText: 'New Highlight',
                webpage: 'http://example.com',
                summary: 'New Summary',
            });
            expect(response.status).toBe(201);
            expect(response.body).toMatchObject({
                highlightedText: 'New Highlight',
                webpage: 'http://example.com',
                summary: 'New Summary',
            });
            const createdHighlight = await highlightModel
                .findOne({ _id: response.body.id })
                .lean();
            expect(createdHighlight).toMatchObject({
                highlightedText: 'New Highlight',
                webpage: 'http://example.com',
                summary: 'New Summary',
            });
        });
        it('should return a 400 error if highlight data is invalid', async () => {
            const response = await request(app.getHttpServer())
                .post('/api/v1/highlight')
                .send({});
            expect(response.status).toBe(400);
            expect(response.body.message).toBe('Bad Request');
        });
    });
    describe('/api/v1/highlight (DELETE)', () => {
        it('should delete a highlight', async () => {
            const highlight = await highlightModel.create({
                highlightedText: 'Highlight to delete',
                webpage: 'http://example.com',
                summary: 'Summary to delete',
            });
            const response = await request(app.getHttpServer())
                .delete('/api/v1/highlight')
                .send({
                id: highlight.id,
            });
            expect(response.status).toBe(200);
            expect(response.body).toMatchObject({
                highlightedText: 'Highlight to delete',
                webpage: 'http://example.com',
                summary: 'Summary to delete',
            });
            const deletedHighlight = await highlightModel
                .findOne({ _id: highlight.id })
                .lean();
            expect(deletedHighlight).toBeNull();
        });
        it('should return a 400 error if highlight data is invalid', async () => {
            const response = await request(app.getHttpServer())
                .delete('/api/v1/highlight')
                .send({});
            expect(response.status).toBe(400);
            expect(response.body.message).toBe('Bad Request');
        });
    });
});
//# sourceMappingURL=highlight.controller.test.js.map