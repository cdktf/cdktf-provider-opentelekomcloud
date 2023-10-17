# `provider`

Refer to the Terraform Registory for docs: [`opentelekomcloud`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-opentelekomcloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpentelekomcloudProvider <a name="OpentelekomcloudProvider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs opentelekomcloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.provider.OpentelekomcloudProvider;

OpentelekomcloudProvider.Builder.create(Construct scope, java.lang.String id)
//  .accessKey(java.lang.String)
//  .agencyDomainName(java.lang.String)
//  .agencyName(java.lang.String)
//  .alias(java.lang.String)
//  .authUrl(java.lang.String)
//  .backoffRetryTimeout(java.lang.Number)
//  .cacertFile(java.lang.String)
//  .cert(java.lang.String)
//  .cloud(java.lang.String)
//  .delegatedProject(java.lang.String)
//  .domainId(java.lang.String)
//  .domainName(java.lang.String)
//  .endpointType(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .key(java.lang.String)
//  .maxBackoffRetries(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .passcode(java.lang.String)
//  .password(java.lang.String)
//  .region(java.lang.String)
//  .secretKey(java.lang.String)
//  .securityToken(java.lang.String)
//  .swauth(java.lang.Boolean)
//  .swauth(IResolvable)
//  .tenantId(java.lang.String)
//  .tenantName(java.lang.String)
//  .token(java.lang.String)
//  .userId(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The access key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.agencyDomainName">agencyDomainName</a></code> | <code>java.lang.String</code> | The name of domain who created the agency (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.agencyName">agencyName</a></code> | <code>java.lang.String</code> | The name of agency. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.authUrl">authUrl</a></code> | <code>java.lang.String</code> | The Identity authentication URL. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.backoffRetryTimeout">backoffRetryTimeout</a></code> | <code>java.lang.Number</code> | Timeout in seconds for backoff retry. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cacertFile">cacertFile</a></code> | <code>java.lang.String</code> | A Custom CA certificate. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cert">cert</a></code> | <code>java.lang.String</code> | A client certificate to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cloud">cloud</a></code> | <code>java.lang.String</code> | An entry in a `clouds.yaml` file to use. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.delegatedProject">delegatedProject</a></code> | <code>java.lang.String</code> | The name of delegated project (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | The ID of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | The name of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Trust self-signed certificates. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | A client private key to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.maxBackoffRetries">maxBackoffRetries</a></code> | <code>java.lang.Number</code> | How many times HTTP request should be retried when rate limit reached. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | How many times HTTP connection should be retried until giving up. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.passcode">passcode</a></code> | <code>java.lang.String</code> | One-time MFA passcode. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Password to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The OpenTelekomCloud region to connect to. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.secretKey">secretKey</a></code> | <code>java.lang.String</code> | The secret key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.securityToken">securityToken</a></code> | <code>java.lang.String</code> | Security token to use for OBS federated authentication. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.swauth">swauth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use Swift's authentication system instead of Keystone. Only used for interaction with Swift. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.tenantName">tenantName</a></code> | <code>java.lang.String</code> | The name of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Authentication token to use as an alternative to username/password. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | User ID to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Username to login with. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.accessKey"></a>

- *Type:* java.lang.String

The access key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#access_key OpentelekomcloudProvider#access_key}

---

##### `agencyDomainName`<sup>Optional</sup> <a name="agencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.agencyDomainName"></a>

- *Type:* java.lang.String

The name of domain who created the agency (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#agency_domain_name OpentelekomcloudProvider#agency_domain_name}

---

##### `agencyName`<sup>Optional</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.agencyName"></a>

- *Type:* java.lang.String

The name of agency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#agency_name OpentelekomcloudProvider#agency_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#alias OpentelekomcloudProvider#alias}

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.authUrl"></a>

- *Type:* java.lang.String

The Identity authentication URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#auth_url OpentelekomcloudProvider#auth_url}

---

##### `backoffRetryTimeout`<sup>Optional</sup> <a name="backoffRetryTimeout" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.backoffRetryTimeout"></a>

- *Type:* java.lang.Number

Timeout in seconds for backoff retry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#backoff_retry_timeout OpentelekomcloudProvider#backoff_retry_timeout}

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cacertFile"></a>

- *Type:* java.lang.String

A Custom CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#cacert_file OpentelekomcloudProvider#cacert_file}

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cert"></a>

- *Type:* java.lang.String

A client certificate to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#cert OpentelekomcloudProvider#cert}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cloud"></a>

- *Type:* java.lang.String

An entry in a `clouds.yaml` file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#cloud OpentelekomcloudProvider#cloud}

---

##### `delegatedProject`<sup>Optional</sup> <a name="delegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.delegatedProject"></a>

- *Type:* java.lang.String

The name of delegated project (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#delegated_project OpentelekomcloudProvider#delegated_project}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

The ID of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#domain_id OpentelekomcloudProvider#domain_id}

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

The name of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#domain_name OpentelekomcloudProvider#domain_name}

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.endpointType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.insecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Trust self-signed certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#insecure OpentelekomcloudProvider#insecure}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.key"></a>

- *Type:* java.lang.String

A client private key to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#key OpentelekomcloudProvider#key}

---

##### `maxBackoffRetries`<sup>Optional</sup> <a name="maxBackoffRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.maxBackoffRetries"></a>

- *Type:* java.lang.Number

How many times HTTP request should be retried when rate limit reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#max_backoff_retries OpentelekomcloudProvider#max_backoff_retries}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

How many times HTTP connection should be retried until giving up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#max_retries OpentelekomcloudProvider#max_retries}

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.passcode"></a>

- *Type:* java.lang.String

One-time MFA passcode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#passcode OpentelekomcloudProvider#passcode}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Password to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#password OpentelekomcloudProvider#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The OpenTelekomCloud region to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#region OpentelekomcloudProvider#region}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.secretKey"></a>

- *Type:* java.lang.String

The secret key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#secret_key OpentelekomcloudProvider#secret_key}

---

##### `securityToken`<sup>Optional</sup> <a name="securityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.securityToken"></a>

- *Type:* java.lang.String

Security token to use for OBS federated authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#security_token OpentelekomcloudProvider#security_token}

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.swauth"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use Swift's authentication system instead of Keystone. Only used for interaction with Swift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#swauth OpentelekomcloudProvider#swauth}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#tenant_id OpentelekomcloudProvider#tenant_id}

---

##### `tenantName`<sup>Optional</sup> <a name="tenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.tenantName"></a>

- *Type:* java.lang.String

The name of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#tenant_name OpentelekomcloudProvider#tenant_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Authentication token to use as an alternative to username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#token OpentelekomcloudProvider#token}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

User ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#user_id OpentelekomcloudProvider#user_id}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Username to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#user_name OpentelekomcloudProvider#user_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyDomainName">resetAgencyDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyName">resetAgencyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAuthUrl">resetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetBackoffRetryTimeout">resetBackoffRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCacertFile">resetCacertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCert">resetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCloud">resetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDelegatedProject">resetDelegatedProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetEndpointType">resetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxBackoffRetries">resetMaxBackoffRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPasscode">resetPasscode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecurityToken">resetSecurityToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSwauth">resetSwauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantName">resetTenantName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserId">resetUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetAgencyDomainName` <a name="resetAgencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyDomainName"></a>

```java
public void resetAgencyDomainName()
```

##### `resetAgencyName` <a name="resetAgencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyName"></a>

```java
public void resetAgencyName()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAuthUrl` <a name="resetAuthUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAuthUrl"></a>

```java
public void resetAuthUrl()
```

##### `resetBackoffRetryTimeout` <a name="resetBackoffRetryTimeout" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetBackoffRetryTimeout"></a>

```java
public void resetBackoffRetryTimeout()
```

##### `resetCacertFile` <a name="resetCacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCacertFile"></a>

```java
public void resetCacertFile()
```

##### `resetCert` <a name="resetCert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCert"></a>

```java
public void resetCert()
```

##### `resetCloud` <a name="resetCloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCloud"></a>

```java
public void resetCloud()
```

##### `resetDelegatedProject` <a name="resetDelegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDelegatedProject"></a>

```java
public void resetDelegatedProject()
```

##### `resetDomainId` <a name="resetDomainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainId"></a>

```java
public void resetDomainId()
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainName"></a>

```java
public void resetDomainName()
```

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetEndpointType"></a>

```java
public void resetEndpointType()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetKey"></a>

```java
public void resetKey()
```

##### `resetMaxBackoffRetries` <a name="resetMaxBackoffRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxBackoffRetries"></a>

```java
public void resetMaxBackoffRetries()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetPasscode` <a name="resetPasscode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPasscode"></a>

```java
public void resetPasscode()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecretKey"></a>

```java
public void resetSecretKey()
```

##### `resetSecurityToken` <a name="resetSecurityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecurityToken"></a>

```java
public void resetSecurityToken()
```

##### `resetSwauth` <a name="resetSwauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSwauth"></a>

```java
public void resetSwauth()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetTenantName` <a name="resetTenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantName"></a>

```java
public void resetTenantName()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetToken"></a>

```java
public void resetToken()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserId"></a>

```java
public void resetUserId()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserName"></a>

```java
public void resetUserName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpentelekomcloudProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.provider.OpentelekomcloudProvider;

OpentelekomcloudProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.provider.OpentelekomcloudProvider;

OpentelekomcloudProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.provider.OpentelekomcloudProvider;

OpentelekomcloudProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.provider.OpentelekomcloudProvider;

OpentelekomcloudProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpentelekomcloudProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OpentelekomcloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpentelekomcloudProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpentelekomcloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OpentelekomcloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainNameInput">agencyDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyNameInput">agencyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrlInput">authUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeoutInput">backoffRetryTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFileInput">cacertFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.certInput">certInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloudInput">cloudInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProjectInput">delegatedProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetriesInput">maxBackoffRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcodeInput">passcodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityTokenInput">securityTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauthInput">swauthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantNameInput">tenantNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainName">agencyDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyName">agencyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeout">backoffRetryTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFile">cacertFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloud">cloud</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProject">delegatedProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetries">maxBackoffRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcode">passcode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityToken">securityToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauth">swauth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantName">tenantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `agencyDomainNameInput`<sup>Optional</sup> <a name="agencyDomainNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainNameInput"></a>

```java
public java.lang.String getAgencyDomainNameInput();
```

- *Type:* java.lang.String

---

##### `agencyNameInput`<sup>Optional</sup> <a name="agencyNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyNameInput"></a>

```java
public java.lang.String getAgencyNameInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `authUrlInput`<sup>Optional</sup> <a name="authUrlInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrlInput"></a>

```java
public java.lang.String getAuthUrlInput();
```

- *Type:* java.lang.String

---

##### `backoffRetryTimeoutInput`<sup>Optional</sup> <a name="backoffRetryTimeoutInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeoutInput"></a>

```java
public java.lang.Number getBackoffRetryTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `cacertFileInput`<sup>Optional</sup> <a name="cacertFileInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFileInput"></a>

```java
public java.lang.String getCacertFileInput();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.certInput"></a>

```java
public java.lang.String getCertInput();
```

- *Type:* java.lang.String

---

##### `cloudInput`<sup>Optional</sup> <a name="cloudInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloudInput"></a>

```java
public java.lang.String getCloudInput();
```

- *Type:* java.lang.String

---

##### `delegatedProjectInput`<sup>Optional</sup> <a name="delegatedProjectInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProjectInput"></a>

```java
public java.lang.String getDelegatedProjectInput();
```

- *Type:* java.lang.String

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecureInput"></a>

```java
public java.lang.Object getInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `maxBackoffRetriesInput`<sup>Optional</sup> <a name="maxBackoffRetriesInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetriesInput"></a>

```java
public java.lang.Number getMaxBackoffRetriesInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `passcodeInput`<sup>Optional</sup> <a name="passcodeInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcodeInput"></a>

```java
public java.lang.String getPasscodeInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `securityTokenInput`<sup>Optional</sup> <a name="securityTokenInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityTokenInput"></a>

```java
public java.lang.String getSecurityTokenInput();
```

- *Type:* java.lang.String

---

##### `swauthInput`<sup>Optional</sup> <a name="swauthInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauthInput"></a>

```java
public java.lang.Object getSwauthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `tenantNameInput`<sup>Optional</sup> <a name="tenantNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantNameInput"></a>

```java
public java.lang.String getTenantNameInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `agencyDomainName`<sup>Optional</sup> <a name="agencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainName"></a>

```java
public java.lang.String getAgencyDomainName();
```

- *Type:* java.lang.String

---

##### `agencyName`<sup>Optional</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyName"></a>

```java
public java.lang.String getAgencyName();
```

- *Type:* java.lang.String

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

---

##### `backoffRetryTimeout`<sup>Optional</sup> <a name="backoffRetryTimeout" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeout"></a>

```java
public java.lang.Number getBackoffRetryTimeout();
```

- *Type:* java.lang.Number

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFile"></a>

```java
public java.lang.String getCacertFile();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloud"></a>

```java
public java.lang.String getCloud();
```

- *Type:* java.lang.String

---

##### `delegatedProject`<sup>Optional</sup> <a name="delegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProject"></a>

```java
public java.lang.String getDelegatedProject();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `maxBackoffRetries`<sup>Optional</sup> <a name="maxBackoffRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetries"></a>

```java
public java.lang.Number getMaxBackoffRetries();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcode"></a>

```java
public java.lang.String getPasscode();
```

- *Type:* java.lang.String

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `securityToken`<sup>Optional</sup> <a name="securityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityToken"></a>

```java
public java.lang.String getSecurityToken();
```

- *Type:* java.lang.String

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauth"></a>

```java
public java.lang.Object getSwauth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `tenantName`<sup>Optional</sup> <a name="tenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantName"></a>

```java
public java.lang.String getTenantName();
```

- *Type:* java.lang.String

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpentelekomcloudProviderConfig <a name="OpentelekomcloudProviderConfig" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.provider.OpentelekomcloudProviderConfig;

OpentelekomcloudProviderConfig.builder()
//  .accessKey(java.lang.String)
//  .agencyDomainName(java.lang.String)
//  .agencyName(java.lang.String)
//  .alias(java.lang.String)
//  .authUrl(java.lang.String)
//  .backoffRetryTimeout(java.lang.Number)
//  .cacertFile(java.lang.String)
//  .cert(java.lang.String)
//  .cloud(java.lang.String)
//  .delegatedProject(java.lang.String)
//  .domainId(java.lang.String)
//  .domainName(java.lang.String)
//  .endpointType(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .key(java.lang.String)
//  .maxBackoffRetries(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .passcode(java.lang.String)
//  .password(java.lang.String)
//  .region(java.lang.String)
//  .secretKey(java.lang.String)
//  .securityToken(java.lang.String)
//  .swauth(java.lang.Boolean)
//  .swauth(IResolvable)
//  .tenantId(java.lang.String)
//  .tenantName(java.lang.String)
//  .token(java.lang.String)
//  .userId(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The access key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyDomainName">agencyDomainName</a></code> | <code>java.lang.String</code> | The name of domain who created the agency (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyName">agencyName</a></code> | <code>java.lang.String</code> | The name of agency. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | The Identity authentication URL. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.backoffRetryTimeout">backoffRetryTimeout</a></code> | <code>java.lang.Number</code> | Timeout in seconds for backoff retry. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cacertFile">cacertFile</a></code> | <code>java.lang.String</code> | A Custom CA certificate. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cert">cert</a></code> | <code>java.lang.String</code> | A client certificate to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cloud">cloud</a></code> | <code>java.lang.String</code> | An entry in a `clouds.yaml` file to use. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.delegatedProject">delegatedProject</a></code> | <code>java.lang.String</code> | The name of delegated project (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | The ID of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | The name of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Trust self-signed certificates. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.key">key</a></code> | <code>java.lang.String</code> | A client private key to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxBackoffRetries">maxBackoffRetries</a></code> | <code>java.lang.Number</code> | How many times HTTP request should be retried when rate limit reached. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | How many times HTTP connection should be retried until giving up. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.passcode">passcode</a></code> | <code>java.lang.String</code> | One-time MFA passcode. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.password">password</a></code> | <code>java.lang.String</code> | Password to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.region">region</a></code> | <code>java.lang.String</code> | The OpenTelekomCloud region to connect to. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | The secret key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.securityToken">securityToken</a></code> | <code>java.lang.String</code> | Security token to use for OBS federated authentication. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.swauth">swauth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use Swift's authentication system instead of Keystone. Only used for interaction with Swift. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantName">tenantName</a></code> | <code>java.lang.String</code> | The name of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | Authentication token to use as an alternative to username/password. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | User ID to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Username to login with. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

The access key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#access_key OpentelekomcloudProvider#access_key}

---

##### `agencyDomainName`<sup>Optional</sup> <a name="agencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyDomainName"></a>

```java
public java.lang.String getAgencyDomainName();
```

- *Type:* java.lang.String

The name of domain who created the agency (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#agency_domain_name OpentelekomcloudProvider#agency_domain_name}

---

##### `agencyName`<sup>Optional</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyName"></a>

```java
public java.lang.String getAgencyName();
```

- *Type:* java.lang.String

The name of agency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#agency_name OpentelekomcloudProvider#agency_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#alias OpentelekomcloudProvider#alias}

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

The Identity authentication URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#auth_url OpentelekomcloudProvider#auth_url}

---

##### `backoffRetryTimeout`<sup>Optional</sup> <a name="backoffRetryTimeout" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.backoffRetryTimeout"></a>

```java
public java.lang.Number getBackoffRetryTimeout();
```

- *Type:* java.lang.Number

Timeout in seconds for backoff retry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#backoff_retry_timeout OpentelekomcloudProvider#backoff_retry_timeout}

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cacertFile"></a>

```java
public java.lang.String getCacertFile();
```

- *Type:* java.lang.String

A Custom CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#cacert_file OpentelekomcloudProvider#cacert_file}

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

A client certificate to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#cert OpentelekomcloudProvider#cert}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cloud"></a>

```java
public java.lang.String getCloud();
```

- *Type:* java.lang.String

An entry in a `clouds.yaml` file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#cloud OpentelekomcloudProvider#cloud}

---

##### `delegatedProject`<sup>Optional</sup> <a name="delegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.delegatedProject"></a>

```java
public java.lang.String getDelegatedProject();
```

- *Type:* java.lang.String

The name of delegated project (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#delegated_project OpentelekomcloudProvider#delegated_project}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

The ID of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#domain_id OpentelekomcloudProvider#domain_id}

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

The name of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#domain_name OpentelekomcloudProvider#domain_name}

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Trust self-signed certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#insecure OpentelekomcloudProvider#insecure}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A client private key to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#key OpentelekomcloudProvider#key}

---

##### `maxBackoffRetries`<sup>Optional</sup> <a name="maxBackoffRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxBackoffRetries"></a>

```java
public java.lang.Number getMaxBackoffRetries();
```

- *Type:* java.lang.Number

How many times HTTP request should be retried when rate limit reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#max_backoff_retries OpentelekomcloudProvider#max_backoff_retries}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

How many times HTTP connection should be retried until giving up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#max_retries OpentelekomcloudProvider#max_retries}

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.passcode"></a>

```java
public java.lang.String getPasscode();
```

- *Type:* java.lang.String

One-time MFA passcode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#passcode OpentelekomcloudProvider#passcode}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#password OpentelekomcloudProvider#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The OpenTelekomCloud region to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#region OpentelekomcloudProvider#region}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

The secret key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#secret_key OpentelekomcloudProvider#secret_key}

---

##### `securityToken`<sup>Optional</sup> <a name="securityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.securityToken"></a>

```java
public java.lang.String getSecurityToken();
```

- *Type:* java.lang.String

Security token to use for OBS federated authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#security_token OpentelekomcloudProvider#security_token}

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.swauth"></a>

```java
public java.lang.Object getSwauth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use Swift's authentication system instead of Keystone. Only used for interaction with Swift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#swauth OpentelekomcloudProvider#swauth}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#tenant_id OpentelekomcloudProvider#tenant_id}

---

##### `tenantName`<sup>Optional</sup> <a name="tenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantName"></a>

```java
public java.lang.String getTenantName();
```

- *Type:* java.lang.String

The name of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#tenant_name OpentelekomcloudProvider#tenant_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Authentication token to use as an alternative to username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#token OpentelekomcloudProvider#token}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

User ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#user_id OpentelekomcloudProvider#user_id}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Username to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs#user_name OpentelekomcloudProvider#user_name}

---



