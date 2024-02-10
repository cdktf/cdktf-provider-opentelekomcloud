# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-opentelekomcloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpentelekomcloudProvider <a name="OpentelekomcloudProvider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs opentelekomcloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-opentelekomcloud'

new provider.OpentelekomcloudProvider(scope: Construct, id: string, config?: OpentelekomcloudProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig">OpentelekomcloudProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig">OpentelekomcloudProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyDomainName">resetAgencyDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyName">resetAgencyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAllowReauth">resetAllowReauth</a></code> | *No description.* |
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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetAgencyDomainName` <a name="resetAgencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyDomainName"></a>

```typescript
public resetAgencyDomainName(): void
```

##### `resetAgencyName` <a name="resetAgencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyName"></a>

```typescript
public resetAgencyName(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAllowReauth` <a name="resetAllowReauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAllowReauth"></a>

```typescript
public resetAllowReauth(): void
```

##### `resetAuthUrl` <a name="resetAuthUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAuthUrl"></a>

```typescript
public resetAuthUrl(): void
```

##### `resetBackoffRetryTimeout` <a name="resetBackoffRetryTimeout" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetBackoffRetryTimeout"></a>

```typescript
public resetBackoffRetryTimeout(): void
```

##### `resetCacertFile` <a name="resetCacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCacertFile"></a>

```typescript
public resetCacertFile(): void
```

##### `resetCert` <a name="resetCert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCert"></a>

```typescript
public resetCert(): void
```

##### `resetCloud` <a name="resetCloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCloud"></a>

```typescript
public resetCloud(): void
```

##### `resetDelegatedProject` <a name="resetDelegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDelegatedProject"></a>

```typescript
public resetDelegatedProject(): void
```

##### `resetDomainId` <a name="resetDomainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetEndpointType"></a>

```typescript
public resetEndpointType(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMaxBackoffRetries` <a name="resetMaxBackoffRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxBackoffRetries"></a>

```typescript
public resetMaxBackoffRetries(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetPasscode` <a name="resetPasscode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPasscode"></a>

```typescript
public resetPasscode(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetSecurityToken` <a name="resetSecurityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecurityToken"></a>

```typescript
public resetSecurityToken(): void
```

##### `resetSwauth` <a name="resetSwauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSwauth"></a>

```typescript
public resetSwauth(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTenantName` <a name="resetTenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantName"></a>

```typescript
public resetTenantName(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserId"></a>

```typescript
public resetUserId(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserName"></a>

```typescript
public resetUserName(): void
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

```typescript
import { provider } from '@cdktf/provider-opentelekomcloud'

provider.OpentelekomcloudProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-opentelekomcloud'

provider.OpentelekomcloudProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-opentelekomcloud'

provider.OpentelekomcloudProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-opentelekomcloud'

provider.OpentelekomcloudProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpentelekomcloudProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpentelekomcloudProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpentelekomcloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpentelekomcloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainNameInput">agencyDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyNameInput">agencyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.allowReauthInput">allowReauthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrlInput">authUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeoutInput">backoffRetryTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFileInput">cacertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.certInput">certInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloudInput">cloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProjectInput">delegatedProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetriesInput">maxBackoffRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcodeInput">passcodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityTokenInput">securityTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauthInput">swauthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantNameInput">tenantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainName">agencyDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyName">agencyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.allowReauth">allowReauth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrl">authUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeout">backoffRetryTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFile">cacertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProject">delegatedProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetries">maxBackoffRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcode">passcode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityToken">securityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauth">swauth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantName">tenantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `agencyDomainNameInput`<sup>Optional</sup> <a name="agencyDomainNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainNameInput"></a>

```typescript
public readonly agencyDomainNameInput: string;
```

- *Type:* string

---

##### `agencyNameInput`<sup>Optional</sup> <a name="agencyNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyNameInput"></a>

```typescript
public readonly agencyNameInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `allowReauthInput`<sup>Optional</sup> <a name="allowReauthInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.allowReauthInput"></a>

```typescript
public readonly allowReauthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authUrlInput`<sup>Optional</sup> <a name="authUrlInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrlInput"></a>

```typescript
public readonly authUrlInput: string;
```

- *Type:* string

---

##### `backoffRetryTimeoutInput`<sup>Optional</sup> <a name="backoffRetryTimeoutInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeoutInput"></a>

```typescript
public readonly backoffRetryTimeoutInput: number;
```

- *Type:* number

---

##### `cacertFileInput`<sup>Optional</sup> <a name="cacertFileInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFileInput"></a>

```typescript
public readonly cacertFileInput: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.certInput"></a>

```typescript
public readonly certInput: string;
```

- *Type:* string

---

##### `cloudInput`<sup>Optional</sup> <a name="cloudInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloudInput"></a>

```typescript
public readonly cloudInput: string;
```

- *Type:* string

---

##### `delegatedProjectInput`<sup>Optional</sup> <a name="delegatedProjectInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProjectInput"></a>

```typescript
public readonly delegatedProjectInput: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `maxBackoffRetriesInput`<sup>Optional</sup> <a name="maxBackoffRetriesInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetriesInput"></a>

```typescript
public readonly maxBackoffRetriesInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `passcodeInput`<sup>Optional</sup> <a name="passcodeInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcodeInput"></a>

```typescript
public readonly passcodeInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `securityTokenInput`<sup>Optional</sup> <a name="securityTokenInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityTokenInput"></a>

```typescript
public readonly securityTokenInput: string;
```

- *Type:* string

---

##### `swauthInput`<sup>Optional</sup> <a name="swauthInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauthInput"></a>

```typescript
public readonly swauthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `tenantNameInput`<sup>Optional</sup> <a name="tenantNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantNameInput"></a>

```typescript
public readonly tenantNameInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `agencyDomainName`<sup>Optional</sup> <a name="agencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainName"></a>

```typescript
public readonly agencyDomainName: string;
```

- *Type:* string

---

##### `agencyName`<sup>Optional</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyName"></a>

```typescript
public readonly agencyName: string;
```

- *Type:* string

---

##### `allowReauth`<sup>Optional</sup> <a name="allowReauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.allowReauth"></a>

```typescript
public readonly allowReauth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

---

##### `backoffRetryTimeout`<sup>Optional</sup> <a name="backoffRetryTimeout" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeout"></a>

```typescript
public readonly backoffRetryTimeout: number;
```

- *Type:* number

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* string

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `delegatedProject`<sup>Optional</sup> <a name="delegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProject"></a>

```typescript
public readonly delegatedProject: string;
```

- *Type:* string

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `maxBackoffRetries`<sup>Optional</sup> <a name="maxBackoffRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetries"></a>

```typescript
public readonly maxBackoffRetries: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcode"></a>

```typescript
public readonly passcode: string;
```

- *Type:* string

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `securityToken`<sup>Optional</sup> <a name="securityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityToken"></a>

```typescript
public readonly securityToken: string;
```

- *Type:* string

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauth"></a>

```typescript
public readonly swauth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `tenantName`<sup>Optional</sup> <a name="tenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpentelekomcloudProviderConfig <a name="OpentelekomcloudProviderConfig" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-opentelekomcloud'

const opentelekomcloudProviderConfig: provider.OpentelekomcloudProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.accessKey">accessKey</a></code> | <code>string</code> | The access key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyDomainName">agencyDomainName</a></code> | <code>string</code> | The name of domain who created the agency (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyName">agencyName</a></code> | <code>string</code> | The name of agency. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.allowReauth">allowReauth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#allow_reauth OpentelekomcloudProvider#allow_reauth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.authUrl">authUrl</a></code> | <code>string</code> | The Identity authentication URL. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.backoffRetryTimeout">backoffRetryTimeout</a></code> | <code>number</code> | Timeout in seconds for backoff retry. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cacertFile">cacertFile</a></code> | <code>string</code> | A Custom CA certificate. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cert">cert</a></code> | <code>string</code> | A client certificate to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cloud">cloud</a></code> | <code>string</code> | An entry in a `clouds.yaml` file to use. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.delegatedProject">delegatedProject</a></code> | <code>string</code> | The name of delegated project (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainId">domainId</a></code> | <code>string</code> | The ID of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainName">domainName</a></code> | <code>string</code> | The name of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Trust self-signed certificates. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.key">key</a></code> | <code>string</code> | A client private key to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxBackoffRetries">maxBackoffRetries</a></code> | <code>number</code> | How many times HTTP request should be retried when rate limit reached. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | How many times HTTP connection should be retried until giving up. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.passcode">passcode</a></code> | <code>string</code> | One-time MFA passcode. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.password">password</a></code> | <code>string</code> | Password to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.region">region</a></code> | <code>string</code> | The OpenTelekomCloud region to connect to. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.secretKey">secretKey</a></code> | <code>string</code> | The secret key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.securityToken">securityToken</a></code> | <code>string</code> | Security token to use for OBS federated authentication. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.swauth">swauth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use Swift's authentication system instead of Keystone. Only used for interaction with Swift. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantName">tenantName</a></code> | <code>string</code> | The name of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.token">token</a></code> | <code>string</code> | Authentication token to use as an alternative to username/password. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userId">userId</a></code> | <code>string</code> | User ID to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userName">userName</a></code> | <code>string</code> | Username to login with. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

The access key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#access_key OpentelekomcloudProvider#access_key}

---

##### `agencyDomainName`<sup>Optional</sup> <a name="agencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyDomainName"></a>

```typescript
public readonly agencyDomainName: string;
```

- *Type:* string

The name of domain who created the agency (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#agency_domain_name OpentelekomcloudProvider#agency_domain_name}

---

##### `agencyName`<sup>Optional</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyName"></a>

```typescript
public readonly agencyName: string;
```

- *Type:* string

The name of agency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#agency_name OpentelekomcloudProvider#agency_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#alias OpentelekomcloudProvider#alias}

---

##### `allowReauth`<sup>Optional</sup> <a name="allowReauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.allowReauth"></a>

```typescript
public readonly allowReauth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#allow_reauth OpentelekomcloudProvider#allow_reauth}.

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

The Identity authentication URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#auth_url OpentelekomcloudProvider#auth_url}

---

##### `backoffRetryTimeout`<sup>Optional</sup> <a name="backoffRetryTimeout" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.backoffRetryTimeout"></a>

```typescript
public readonly backoffRetryTimeout: number;
```

- *Type:* number

Timeout in seconds for backoff retry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#backoff_retry_timeout OpentelekomcloudProvider#backoff_retry_timeout}

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cacertFile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* string

A Custom CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#cacert_file OpentelekomcloudProvider#cacert_file}

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

A client certificate to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#cert OpentelekomcloudProvider#cert}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

An entry in a `clouds.yaml` file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#cloud OpentelekomcloudProvider#cloud}

---

##### `delegatedProject`<sup>Optional</sup> <a name="delegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.delegatedProject"></a>

```typescript
public readonly delegatedProject: string;
```

- *Type:* string

The name of delegated project (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#delegated_project OpentelekomcloudProvider#delegated_project}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The ID of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#domain_id OpentelekomcloudProvider#domain_id}

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#domain_name OpentelekomcloudProvider#domain_name}

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Trust self-signed certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#insecure OpentelekomcloudProvider#insecure}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A client private key to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#key OpentelekomcloudProvider#key}

---

##### `maxBackoffRetries`<sup>Optional</sup> <a name="maxBackoffRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxBackoffRetries"></a>

```typescript
public readonly maxBackoffRetries: number;
```

- *Type:* number

How many times HTTP request should be retried when rate limit reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#max_backoff_retries OpentelekomcloudProvider#max_backoff_retries}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

How many times HTTP connection should be retried until giving up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#max_retries OpentelekomcloudProvider#max_retries}

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.passcode"></a>

```typescript
public readonly passcode: string;
```

- *Type:* string

One-time MFA passcode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#passcode OpentelekomcloudProvider#passcode}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#password OpentelekomcloudProvider#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The OpenTelekomCloud region to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#region OpentelekomcloudProvider#region}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

The secret key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#secret_key OpentelekomcloudProvider#secret_key}

---

##### `securityToken`<sup>Optional</sup> <a name="securityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.securityToken"></a>

```typescript
public readonly securityToken: string;
```

- *Type:* string

Security token to use for OBS federated authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#security_token OpentelekomcloudProvider#security_token}

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.swauth"></a>

```typescript
public readonly swauth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use Swift's authentication system instead of Keystone. Only used for interaction with Swift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#swauth OpentelekomcloudProvider#swauth}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#tenant_id OpentelekomcloudProvider#tenant_id}

---

##### `tenantName`<sup>Optional</sup> <a name="tenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

The name of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#tenant_name OpentelekomcloudProvider#tenant_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Authentication token to use as an alternative to username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#token OpentelekomcloudProvider#token}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

User ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#user_id OpentelekomcloudProvider#user_id}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Username to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs#user_name OpentelekomcloudProvider#user_name}

---



