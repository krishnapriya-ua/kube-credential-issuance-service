import { IssueCredential } from '../src/controllers/issuanceController';
import { Credential } from '../src/model/credential';

jest.mock('../src/model/credential');

describe('IssueCredential', () => {
  it('should return already exists message', async () => {
    const req = { body: { fullname: 'John', email: 'john@gmail.com' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    const existing = { fullname: 'John', email: 'john@gmail.com', workerId: 'worker-1' };
    (Credential.findOne as jest.Mock).mockResolvedValue(existing);

    await IssueCredential(req as any, res as any);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        credentials: existing
      })
    );
  });

  it('should issue credentials when not exists', async () => {
    const req = { body: { fullname: 'John', email: 'john@gmail.com' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    (Credential.findOne as jest.Mock).mockResolvedValue(null);
    (Credential.prototype.save as jest.Mock).mockResolvedValue(true);

    await IssueCredential(req as any, res as any);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        message: expect.stringContaining('Credentials issued by')
        // newCredentials exists, but you don't need to assert it if you don't care
      })
    );
  });
});
