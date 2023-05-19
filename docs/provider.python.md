# `provider`

Refer to the Terraform Registory for docs: [`opentelekomcloud`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-opentelekomcloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpentelekomcloudProvider <a name="OpentelekomcloudProvider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs opentelekomcloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import provider

provider.OpentelekomcloudProvider(
  scope: Construct,
  id: str,
  access_key: str = None,
  agency_domain_name: str = None,
  agency_name: str = None,
  alias: str = None,
  auth_url: str = None,
  cacert_file: str = None,
  cert: str = None,
  cloud: str = None,
  delegated_project: str = None,
  domain_id: str = None,
  domain_name: str = None,
  endpoint_type: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  key: str = None,
  max_retries: typing.Union[int, float] = None,
  passcode: str = None,
  password: str = None,
  region: str = None,
  secret_key: str = None,
  security_token: str = None,
  swauth: typing.Union[bool, IResolvable] = None,
  tenant_id: str = None,
  tenant_name: str = None,
  token: str = None,
  user_id: str = None,
  user_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.accessKey">access_key</a></code> | <code>str</code> | The access key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.agencyDomainName">agency_domain_name</a></code> | <code>str</code> | The name of domain who created the agency (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.agencyName">agency_name</a></code> | <code>str</code> | The name of agency. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.authUrl">auth_url</a></code> | <code>str</code> | The Identity authentication URL. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cacertFile">cacert_file</a></code> | <code>str</code> | A Custom CA certificate. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cert">cert</a></code> | <code>str</code> | A client certificate to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cloud">cloud</a></code> | <code>str</code> | An entry in a `clouds.yaml` file to use. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.delegatedProject">delegated_project</a></code> | <code>str</code> | The name of delegated project (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | The ID of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The name of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Trust self-signed certificates. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.key">key</a></code> | <code>str</code> | A client private key to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | How many times HTTP connection should be retried until giving up. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.passcode">passcode</a></code> | <code>str</code> | One-time MFA passcode. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | Password to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | The OpenTelekomCloud region to connect to. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.secretKey">secret_key</a></code> | <code>str</code> | The secret key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.securityToken">security_token</a></code> | <code>str</code> | Security token to use for OBS federated authentication. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.swauth">swauth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use Swift's authentication system instead of Keystone. Only used for interaction with Swift. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.tenantName">tenant_name</a></code> | <code>str</code> | The name of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Authentication token to use as an alternative to username/password. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | User ID to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Username to login with. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.accessKey"></a>

- *Type:* str

The access key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#access_key OpentelekomcloudProvider#access_key}

---

##### `agency_domain_name`<sup>Optional</sup> <a name="agency_domain_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.agencyDomainName"></a>

- *Type:* str

The name of domain who created the agency (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#agency_domain_name OpentelekomcloudProvider#agency_domain_name}

---

##### `agency_name`<sup>Optional</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.agencyName"></a>

- *Type:* str

The name of agency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#agency_name OpentelekomcloudProvider#agency_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#alias OpentelekomcloudProvider#alias}

---

##### `auth_url`<sup>Optional</sup> <a name="auth_url" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.authUrl"></a>

- *Type:* str

The Identity authentication URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#auth_url OpentelekomcloudProvider#auth_url}

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cacertFile"></a>

- *Type:* str

A Custom CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#cacert_file OpentelekomcloudProvider#cacert_file}

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cert"></a>

- *Type:* str

A client certificate to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#cert OpentelekomcloudProvider#cert}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.cloud"></a>

- *Type:* str

An entry in a `clouds.yaml` file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#cloud OpentelekomcloudProvider#cloud}

---

##### `delegated_project`<sup>Optional</sup> <a name="delegated_project" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.delegatedProject"></a>

- *Type:* str

The name of delegated project (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#delegated_project OpentelekomcloudProvider#delegated_project}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.domainId"></a>

- *Type:* str

The ID of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#domain_id OpentelekomcloudProvider#domain_id}

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.domainName"></a>

- *Type:* str

The name of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#domain_name OpentelekomcloudProvider#domain_name}

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.insecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Trust self-signed certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#insecure OpentelekomcloudProvider#insecure}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.key"></a>

- *Type:* str

A client private key to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#key OpentelekomcloudProvider#key}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

How many times HTTP connection should be retried until giving up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#max_retries OpentelekomcloudProvider#max_retries}

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.passcode"></a>

- *Type:* str

One-time MFA passcode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#passcode OpentelekomcloudProvider#passcode}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.password"></a>

- *Type:* str

Password to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#password OpentelekomcloudProvider#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.region"></a>

- *Type:* str

The OpenTelekomCloud region to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#region OpentelekomcloudProvider#region}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.secretKey"></a>

- *Type:* str

The secret key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#secret_key OpentelekomcloudProvider#secret_key}

---

##### `security_token`<sup>Optional</sup> <a name="security_token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.securityToken"></a>

- *Type:* str

Security token to use for OBS federated authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#security_token OpentelekomcloudProvider#security_token}

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.swauth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use Swift's authentication system instead of Keystone. Only used for interaction with Swift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#swauth OpentelekomcloudProvider#swauth}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.tenantId"></a>

- *Type:* str

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#tenant_id OpentelekomcloudProvider#tenant_id}

---

##### `tenant_name`<sup>Optional</sup> <a name="tenant_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.tenantName"></a>

- *Type:* str

The name of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#tenant_name OpentelekomcloudProvider#tenant_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.token"></a>

- *Type:* str

Authentication token to use as an alternative to username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#token OpentelekomcloudProvider#token}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.userId"></a>

- *Type:* str

User ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#user_id OpentelekomcloudProvider#user_id}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.userName"></a>

- *Type:* str

Username to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#user_name OpentelekomcloudProvider#user_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAccessKey">reset_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyDomainName">reset_agency_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyName">reset_agency_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAuthUrl">reset_auth_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCacertFile">reset_cacert_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCert">reset_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCloud">reset_cloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDelegatedProject">reset_delegated_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainId">reset_domain_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetEndpointType">reset_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPasscode">reset_passcode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecretKey">reset_secret_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecurityToken">reset_security_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSwauth">reset_swauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantName">reset_tenant_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserId">reset_user_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_access_key` <a name="reset_access_key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAccessKey"></a>

```python
def reset_access_key() -> None
```

##### `reset_agency_domain_name` <a name="reset_agency_domain_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyDomainName"></a>

```python
def reset_agency_domain_name() -> None
```

##### `reset_agency_name` <a name="reset_agency_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyName"></a>

```python
def reset_agency_name() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_auth_url` <a name="reset_auth_url" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAuthUrl"></a>

```python
def reset_auth_url() -> None
```

##### `reset_cacert_file` <a name="reset_cacert_file" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCacertFile"></a>

```python
def reset_cacert_file() -> None
```

##### `reset_cert` <a name="reset_cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCert"></a>

```python
def reset_cert() -> None
```

##### `reset_cloud` <a name="reset_cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCloud"></a>

```python
def reset_cloud() -> None
```

##### `reset_delegated_project` <a name="reset_delegated_project" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDelegatedProject"></a>

```python
def reset_delegated_project() -> None
```

##### `reset_domain_id` <a name="reset_domain_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainId"></a>

```python
def reset_domain_id() -> None
```

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_endpoint_type` <a name="reset_endpoint_type" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetEndpointType"></a>

```python
def reset_endpoint_type() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_passcode` <a name="reset_passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPasscode"></a>

```python
def reset_passcode() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret_key` <a name="reset_secret_key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecretKey"></a>

```python
def reset_secret_key() -> None
```

##### `reset_security_token` <a name="reset_security_token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecurityToken"></a>

```python
def reset_security_token() -> None
```

##### `reset_swauth` <a name="reset_swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSwauth"></a>

```python
def reset_swauth() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_tenant_name` <a name="reset_tenant_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantName"></a>

```python
def reset_tenant_name() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserId"></a>

```python
def reset_user_id() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserName"></a>

```python
def reset_user_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import provider

provider.OpentelekomcloudProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import provider

provider.OpentelekomcloudProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import provider

provider.OpentelekomcloudProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainNameInput">agency_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyNameInput">agency_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrlInput">auth_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFileInput">cacert_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloudInput">cloud_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProjectInput">delegated_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecureInput">insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcodeInput">passcode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKeyInput">secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityTokenInput">security_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauthInput">swauth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantNameInput">tenant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainName">agency_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyName">agency_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrl">auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFile">cacert_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProject">delegated_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcode">passcode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityToken">security_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauth">swauth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantName">tenant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `agency_domain_name_input`<sup>Optional</sup> <a name="agency_domain_name_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainNameInput"></a>

```python
agency_domain_name_input: str
```

- *Type:* str

---

##### `agency_name_input`<sup>Optional</sup> <a name="agency_name_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyNameInput"></a>

```python
agency_name_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `auth_url_input`<sup>Optional</sup> <a name="auth_url_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrlInput"></a>

```python
auth_url_input: str
```

- *Type:* str

---

##### `cacert_file_input`<sup>Optional</sup> <a name="cacert_file_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFileInput"></a>

```python
cacert_file_input: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `cloud_input`<sup>Optional</sup> <a name="cloud_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloudInput"></a>

```python
cloud_input: str
```

- *Type:* str

---

##### `delegated_project_input`<sup>Optional</sup> <a name="delegated_project_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProjectInput"></a>

```python
delegated_project_input: str
```

- *Type:* str

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecureInput"></a>

```python
insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `passcode_input`<sup>Optional</sup> <a name="passcode_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcodeInput"></a>

```python
passcode_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_key_input`<sup>Optional</sup> <a name="secret_key_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKeyInput"></a>

```python
secret_key_input: str
```

- *Type:* str

---

##### `security_token_input`<sup>Optional</sup> <a name="security_token_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityTokenInput"></a>

```python
security_token_input: str
```

- *Type:* str

---

##### `swauth_input`<sup>Optional</sup> <a name="swauth_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauthInput"></a>

```python
swauth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `tenant_name_input`<sup>Optional</sup> <a name="tenant_name_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantNameInput"></a>

```python
tenant_name_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `agency_domain_name`<sup>Optional</sup> <a name="agency_domain_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainName"></a>

```python
agency_domain_name: str
```

- *Type:* str

---

##### `agency_name`<sup>Optional</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

---

##### `auth_url`<sup>Optional</sup> <a name="auth_url" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFile"></a>

```python
cacert_file: str
```

- *Type:* str

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `delegated_project`<sup>Optional</sup> <a name="delegated_project" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProject"></a>

```python
delegated_project: str
```

- *Type:* str

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcode"></a>

```python
passcode: str
```

- *Type:* str

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `security_token`<sup>Optional</sup> <a name="security_token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityToken"></a>

```python
security_token: str
```

- *Type:* str

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauth"></a>

```python
swauth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `tenant_name`<sup>Optional</sup> <a name="tenant_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantName"></a>

```python
tenant_name: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpentelekomcloudProviderConfig <a name="OpentelekomcloudProviderConfig" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import provider

provider.OpentelekomcloudProviderConfig(
  access_key: str = None,
  agency_domain_name: str = None,
  agency_name: str = None,
  alias: str = None,
  auth_url: str = None,
  cacert_file: str = None,
  cert: str = None,
  cloud: str = None,
  delegated_project: str = None,
  domain_id: str = None,
  domain_name: str = None,
  endpoint_type: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  key: str = None,
  max_retries: typing.Union[int, float] = None,
  passcode: str = None,
  password: str = None,
  region: str = None,
  secret_key: str = None,
  security_token: str = None,
  swauth: typing.Union[bool, IResolvable] = None,
  tenant_id: str = None,
  tenant_name: str = None,
  token: str = None,
  user_id: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.accessKey">access_key</a></code> | <code>str</code> | The access key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyDomainName">agency_domain_name</a></code> | <code>str</code> | The name of domain who created the agency (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyName">agency_name</a></code> | <code>str</code> | The name of agency. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.authUrl">auth_url</a></code> | <code>str</code> | The Identity authentication URL. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cacertFile">cacert_file</a></code> | <code>str</code> | A Custom CA certificate. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cert">cert</a></code> | <code>str</code> | A client certificate to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cloud">cloud</a></code> | <code>str</code> | An entry in a `clouds.yaml` file to use. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.delegatedProject">delegated_project</a></code> | <code>str</code> | The name of delegated project (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainId">domain_id</a></code> | <code>str</code> | The ID of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainName">domain_name</a></code> | <code>str</code> | The name of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Trust self-signed certificates. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.key">key</a></code> | <code>str</code> | A client private key to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | How many times HTTP connection should be retried until giving up. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.passcode">passcode</a></code> | <code>str</code> | One-time MFA passcode. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.password">password</a></code> | <code>str</code> | Password to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.region">region</a></code> | <code>str</code> | The OpenTelekomCloud region to connect to. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.secretKey">secret_key</a></code> | <code>str</code> | The secret key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.securityToken">security_token</a></code> | <code>str</code> | Security token to use for OBS federated authentication. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.swauth">swauth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use Swift's authentication system instead of Keystone. Only used for interaction with Swift. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantName">tenant_name</a></code> | <code>str</code> | The name of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.token">token</a></code> | <code>str</code> | Authentication token to use as an alternative to username/password. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userId">user_id</a></code> | <code>str</code> | User ID to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userName">user_name</a></code> | <code>str</code> | Username to login with. |

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

The access key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#access_key OpentelekomcloudProvider#access_key}

---

##### `agency_domain_name`<sup>Optional</sup> <a name="agency_domain_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyDomainName"></a>

```python
agency_domain_name: str
```

- *Type:* str

The name of domain who created the agency (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#agency_domain_name OpentelekomcloudProvider#agency_domain_name}

---

##### `agency_name`<sup>Optional</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

The name of agency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#agency_name OpentelekomcloudProvider#agency_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#alias OpentelekomcloudProvider#alias}

---

##### `auth_url`<sup>Optional</sup> <a name="auth_url" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

The Identity authentication URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#auth_url OpentelekomcloudProvider#auth_url}

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cacertFile"></a>

```python
cacert_file: str
```

- *Type:* str

A Custom CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#cacert_file OpentelekomcloudProvider#cacert_file}

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cert"></a>

```python
cert: str
```

- *Type:* str

A client certificate to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#cert OpentelekomcloudProvider#cert}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

An entry in a `clouds.yaml` file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#cloud OpentelekomcloudProvider#cloud}

---

##### `delegated_project`<sup>Optional</sup> <a name="delegated_project" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.delegatedProject"></a>

```python
delegated_project: str
```

- *Type:* str

The name of delegated project (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#delegated_project OpentelekomcloudProvider#delegated_project}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

The ID of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#domain_id OpentelekomcloudProvider#domain_id}

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The name of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#domain_name OpentelekomcloudProvider#domain_name}

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Trust self-signed certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#insecure OpentelekomcloudProvider#insecure}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.key"></a>

```python
key: str
```

- *Type:* str

A client private key to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#key OpentelekomcloudProvider#key}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many times HTTP connection should be retried until giving up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#max_retries OpentelekomcloudProvider#max_retries}

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.passcode"></a>

```python
passcode: str
```

- *Type:* str

One-time MFA passcode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#passcode OpentelekomcloudProvider#passcode}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#password OpentelekomcloudProvider#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The OpenTelekomCloud region to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#region OpentelekomcloudProvider#region}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

The secret key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#secret_key OpentelekomcloudProvider#secret_key}

---

##### `security_token`<sup>Optional</sup> <a name="security_token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.securityToken"></a>

```python
security_token: str
```

- *Type:* str

Security token to use for OBS federated authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#security_token OpentelekomcloudProvider#security_token}

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.swauth"></a>

```python
swauth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use Swift's authentication system instead of Keystone. Only used for interaction with Swift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#swauth OpentelekomcloudProvider#swauth}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#tenant_id OpentelekomcloudProvider#tenant_id}

---

##### `tenant_name`<sup>Optional</sup> <a name="tenant_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantName"></a>

```python
tenant_name: str
```

- *Type:* str

The name of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#tenant_name OpentelekomcloudProvider#tenant_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Authentication token to use as an alternative to username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#token OpentelekomcloudProvider#token}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

User ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#user_id OpentelekomcloudProvider#user_id}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Username to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs#user_name OpentelekomcloudProvider#user_name}

---



