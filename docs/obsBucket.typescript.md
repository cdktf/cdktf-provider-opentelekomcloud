# `opentelekomcloud_obs_bucket`

Refer to the Terraform Registory for docs: [`opentelekomcloud_obs_bucket`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket).

# `obsBucket` Submodule <a name="`obsBucket` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucket <a name="ObsBucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket opentelekomcloud_obs_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucket(scope: Construct, id: string, config: ObsBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig">ObsBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig">ObsBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putEventNotifications">putEventNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLifecycleRule">putLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putServerSideEncryption">putServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite">putWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetEventNotifications">resetEventNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLifecycleRule">resetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetParallelFs">resetParallelFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetVersioning">resetVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetWebsite">resetWebsite</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putCorsRule"></a>

```typescript
public putCorsRule(value: IResolvable | ObsBucketCorsRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putCorsRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>[]

---

##### `putEventNotifications` <a name="putEventNotifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putEventNotifications"></a>

```typescript
public putEventNotifications(value: IResolvable | ObsBucketEventNotifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putEventNotifications.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>[]

---

##### `putLifecycleRule` <a name="putLifecycleRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLifecycleRule"></a>

```typescript
public putLifecycleRule(value: IResolvable | ObsBucketLifecycleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLifecycleRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>[]

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLogging"></a>

```typescript
public putLogging(value: IResolvable | ObsBucketLogging[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLogging.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>[]

---

##### `putServerSideEncryption` <a name="putServerSideEncryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putServerSideEncryption"></a>

```typescript
public putServerSideEncryption(value: ObsBucketServerSideEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putServerSideEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

---

##### `putWebsite` <a name="putWebsite" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite"></a>

```typescript
public putWebsite(value: ObsBucketWebsite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetCorsRule"></a>

```typescript
public resetCorsRule(): void
```

##### `resetEventNotifications` <a name="resetEventNotifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetEventNotifications"></a>

```typescript
public resetEventNotifications(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifecycleRule` <a name="resetLifecycleRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLifecycleRule"></a>

```typescript
public resetLifecycleRule(): void
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetParallelFs` <a name="resetParallelFs" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetParallelFs"></a>

```typescript
public resetParallelFs(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetServerSideEncryption"></a>

```typescript
public resetServerSideEncryption(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVersioning` <a name="resetVersioning" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetVersioning"></a>

```typescript
public resetVersioning(): void
```

##### `resetWebsite` <a name="resetWebsite" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetWebsite"></a>

```typescript
public resetWebsite(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isConstruct"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

obsBucket.ObsBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformElement"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

obsBucket.ObsBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformResource"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

obsBucket.ObsBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketVersion">bucketVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList">ObsBucketCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotifications">eventNotifications</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList">ObsBucketEventNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRule">lifecycleRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList">ObsBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList">ObsBucketLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryption">serverSideEncryption</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference">ObsBucketServerSideEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference">ObsBucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRuleInput">corsRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotificationsInput">eventNotificationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRuleInput">lifecycleRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.loggingInput">loggingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFsInput">parallelFsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioningInput">versioningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.websiteInput">websiteInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFs">parallelFs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioning">versioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

---

##### `bucketVersion`<sup>Required</sup> <a name="bucketVersion" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketVersion"></a>

```typescript
public readonly bucketVersion: string;
```

- *Type:* string

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRule"></a>

```typescript
public readonly corsRule: ObsBucketCorsRuleList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList">ObsBucketCorsRuleList</a>

---

##### `eventNotifications`<sup>Required</sup> <a name="eventNotifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotifications"></a>

```typescript
public readonly eventNotifications: ObsBucketEventNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList">ObsBucketEventNotificationsList</a>

---

##### `lifecycleRule`<sup>Required</sup> <a name="lifecycleRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRule"></a>

```typescript
public readonly lifecycleRule: ObsBucketLifecycleRuleList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList">ObsBucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.logging"></a>

```typescript
public readonly logging: ObsBucketLoggingList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList">ObsBucketLoggingList</a>

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: ObsBucketServerSideEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference">ObsBucketServerSideEncryptionOutputReference</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.website"></a>

```typescript
public readonly website: ObsBucketWebsiteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference">ObsBucketWebsiteOutputReference</a>

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: IResolvable | ObsBucketCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>[]

---

##### `eventNotificationsInput`<sup>Optional</sup> <a name="eventNotificationsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotificationsInput"></a>

```typescript
public readonly eventNotificationsInput: IResolvable | ObsBucketEventNotifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>[]

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifecycleRuleInput`<sup>Optional</sup> <a name="lifecycleRuleInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRuleInput"></a>

```typescript
public readonly lifecycleRuleInput: IResolvable | ObsBucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>[]

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.loggingInput"></a>

```typescript
public readonly loggingInput: IResolvable | ObsBucketLogging[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>[]

---

##### `parallelFsInput`<sup>Optional</sup> <a name="parallelFsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFsInput"></a>

```typescript
public readonly parallelFsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryptionInput"></a>

```typescript
public readonly serverSideEncryptionInput: ObsBucketServerSideEncryption;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versioningInput`<sup>Optional</sup> <a name="versioningInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioningInput"></a>

```typescript
public readonly versioningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.websiteInput"></a>

```typescript
public readonly websiteInput: ObsBucketWebsite;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parallelFs`<sup>Required</sup> <a name="parallelFs" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFs"></a>

```typescript
public readonly parallelFs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioning"></a>

```typescript
public readonly versioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketConfig <a name="ObsBucketConfig" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketConfig: obsBucket.ObsBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#bucket ObsBucket#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.acl">acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#acl ObsBucket#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.corsRule">corsRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>[]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.eventNotifications">eventNotifications</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>[]</code> | event_notifications block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#force_destroy ObsBucket#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#id ObsBucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycleRule">lifecycleRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>[]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.logging">logging</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>[]</code> | logging block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.parallelFs">parallelFs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#parallel_fs ObsBucket#parallel_fs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#region ObsBucket#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.storageClass">storageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#tags ObsBucket#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.versioning">versioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#versioning ObsBucket#versioning}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a></code> | website block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#bucket ObsBucket#bucket}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#acl ObsBucket#acl}.

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.corsRule"></a>

```typescript
public readonly corsRule: IResolvable | ObsBucketCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>[]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#cors_rule ObsBucket#cors_rule}

---

##### `eventNotifications`<sup>Optional</sup> <a name="eventNotifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.eventNotifications"></a>

```typescript
public readonly eventNotifications: IResolvable | ObsBucketEventNotifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>[]

event_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#event_notifications ObsBucket#event_notifications}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#force_destroy ObsBucket#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#id ObsBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleRule`<sup>Optional</sup> <a name="lifecycleRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycleRule"></a>

```typescript
public readonly lifecycleRule: IResolvable | ObsBucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>[]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#lifecycle_rule ObsBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.logging"></a>

```typescript
public readonly logging: IResolvable | ObsBucketLogging[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>[]

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#logging ObsBucket#logging}

---

##### `parallelFs`<sup>Optional</sup> <a name="parallelFs" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.parallelFs"></a>

```typescript
public readonly parallelFs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#parallel_fs ObsBucket#parallel_fs}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#region ObsBucket#region}.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: ObsBucketServerSideEncryption;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#server_side_encryption ObsBucket#server_side_encryption}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#tags ObsBucket#tags}.

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.versioning"></a>

```typescript
public readonly versioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#versioning ObsBucket#versioning}.

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.website"></a>

```typescript
public readonly website: ObsBucketWebsite;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#website ObsBucket#website}

---

### ObsBucketCorsRule <a name="ObsBucketCorsRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketCorsRule: obsBucket.ObsBucketCorsRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#allowed_methods ObsBucket#allowed_methods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#allowed_origins ObsBucket#allowed_origins}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#allowed_headers ObsBucket#allowed_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#expose_headers ObsBucket#expose_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#max_age_seconds ObsBucket#max_age_seconds}. |

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#allowed_methods ObsBucket#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#allowed_origins ObsBucket#allowed_origins}.

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#allowed_headers ObsBucket#allowed_headers}.

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#expose_headers ObsBucket#expose_headers}.

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#max_age_seconds ObsBucket#max_age_seconds}.

---

### ObsBucketEventNotifications <a name="ObsBucketEventNotifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketEventNotifications: obsBucket.ObsBucketEventNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#events ObsBucket#events}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#topic ObsBucket#topic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.filterRule">filterRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>[]</code> | filter_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#id ObsBucket#id}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#events ObsBucket#events}.

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#topic ObsBucket#topic}.

---

##### `filterRule`<sup>Optional</sup> <a name="filterRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.filterRule"></a>

```typescript
public readonly filterRule: IResolvable | ObsBucketEventNotificationsFilterRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>[]

filter_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#filter_rule ObsBucket#filter_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#id ObsBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ObsBucketEventNotificationsFilterRule <a name="ObsBucketEventNotificationsFilterRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketEventNotificationsFilterRule: obsBucket.ObsBucketEventNotificationsFilterRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#name ObsBucket#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#value ObsBucket#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#name ObsBucket#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#value ObsBucket#value}.

---

### ObsBucketLifecycleRule <a name="ObsBucketLifecycleRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketLifecycleRule: obsBucket.ObsBucketLifecycleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#enabled ObsBucket#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#name ObsBucket#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.expiration">expiration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>[]</code> | expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionExpiration">noncurrentVersionExpiration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>[]</code> | noncurrent_version_expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionTransition">noncurrentVersionTransition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>[]</code> | noncurrent_version_transition block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#prefix ObsBucket#prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.transition">transition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>[]</code> | transition block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#enabled ObsBucket#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#name ObsBucket#name}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.expiration"></a>

```typescript
public readonly expiration: IResolvable | ObsBucketLifecycleRuleExpiration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>[]

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#expiration ObsBucket#expiration}

---

##### `noncurrentVersionExpiration`<sup>Optional</sup> <a name="noncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionExpiration"></a>

```typescript
public readonly noncurrentVersionExpiration: IResolvable | ObsBucketLifecycleRuleNoncurrentVersionExpiration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>[]

noncurrent_version_expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#noncurrent_version_expiration ObsBucket#noncurrent_version_expiration}

---

##### `noncurrentVersionTransition`<sup>Optional</sup> <a name="noncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionTransition"></a>

```typescript
public readonly noncurrentVersionTransition: IResolvable | ObsBucketLifecycleRuleNoncurrentVersionTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>[]

noncurrent_version_transition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#noncurrent_version_transition ObsBucket#noncurrent_version_transition}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#prefix ObsBucket#prefix}.

---

##### `transition`<sup>Optional</sup> <a name="transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.transition"></a>

```typescript
public readonly transition: IResolvable | ObsBucketLifecycleRuleTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>[]

transition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#transition ObsBucket#transition}

---

### ObsBucketLifecycleRuleExpiration <a name="ObsBucketLifecycleRuleExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketLifecycleRuleExpiration: obsBucket.ObsBucketLifecycleRuleExpiration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#days ObsBucket#days}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#days ObsBucket#days}.

---

### ObsBucketLifecycleRuleNoncurrentVersionExpiration <a name="ObsBucketLifecycleRuleNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketLifecycleRuleNoncurrentVersionExpiration: obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#days ObsBucket#days}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#days ObsBucket#days}.

---

### ObsBucketLifecycleRuleNoncurrentVersionTransition <a name="ObsBucketLifecycleRuleNoncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketLifecycleRuleNoncurrentVersionTransition: obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#days ObsBucket#days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.storageClass">storageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#days ObsBucket#days}.

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}.

---

### ObsBucketLifecycleRuleTransition <a name="ObsBucketLifecycleRuleTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketLifecycleRuleTransition: obsBucket.ObsBucketLifecycleRuleTransition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.days">days</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#days ObsBucket#days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.storageClass">storageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#days ObsBucket#days}.

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}.

---

### ObsBucketLogging <a name="ObsBucketLogging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketLogging: obsBucket.ObsBucketLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetBucket">targetBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#target_bucket ObsBucket#target_bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetPrefix">targetPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#target_prefix ObsBucket#target_prefix}. |

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetBucket"></a>

```typescript
public readonly targetBucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#target_bucket ObsBucket#target_bucket}.

---

##### `targetPrefix`<sup>Optional</sup> <a name="targetPrefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetPrefix"></a>

```typescript
public readonly targetPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#target_prefix ObsBucket#target_prefix}.

---

### ObsBucketServerSideEncryption <a name="ObsBucketServerSideEncryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketServerSideEncryption: obsBucket.ObsBucketServerSideEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#algorithm ObsBucket#algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#kms_key_id ObsBucket#kms_key_id}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#algorithm ObsBucket#algorithm}.

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#kms_key_id ObsBucket#kms_key_id}.

---

### ObsBucketWebsite <a name="ObsBucketWebsite" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

const obsBucketWebsite: obsBucket.ObsBucketWebsite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.errorDocument">errorDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#error_document ObsBucket#error_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.indexDocument">indexDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#index_document ObsBucket#index_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.redirectAllRequestsTo">redirectAllRequestsTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#redirect_all_requests_to ObsBucket#redirect_all_requests_to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.routingRules">routingRules</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#routing_rules ObsBucket#routing_rules}. |

---

##### `errorDocument`<sup>Optional</sup> <a name="errorDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.errorDocument"></a>

```typescript
public readonly errorDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#error_document ObsBucket#error_document}.

---

##### `indexDocument`<sup>Optional</sup> <a name="indexDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.indexDocument"></a>

```typescript
public readonly indexDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#index_document ObsBucket#index_document}.

---

##### `redirectAllRequestsTo`<sup>Optional</sup> <a name="redirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.redirectAllRequestsTo"></a>

```typescript
public readonly redirectAllRequestsTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#redirect_all_requests_to ObsBucket#redirect_all_requests_to}.

---

##### `routingRules`<sup>Optional</sup> <a name="routingRules" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.routingRules"></a>

```typescript
public readonly routingRules: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/obs_bucket#routing_rules ObsBucket#routing_rules}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketCorsRuleList <a name="ObsBucketCorsRuleList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketCorsRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.get"></a>

```typescript
public get(index: number): ObsBucketCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketCorsRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>[]

---


### ObsBucketCorsRuleOutputReference <a name="ObsBucketCorsRuleOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketCorsRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetAllowedHeaders"></a>

```typescript
public resetAllowedHeaders(): void
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetExposeHeaders"></a>

```typescript
public resetExposeHeaders(): void
```

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```typescript
public resetMaxAgeSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeadersInput"></a>

```typescript
public readonly exposeHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```typescript
public readonly maxAgeSecondsInput: number;
```

- *Type:* number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketCorsRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>

---


### ObsBucketEventNotificationsFilterRuleList <a name="ObsBucketEventNotificationsFilterRuleList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketEventNotificationsFilterRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.get"></a>

```typescript
public get(index: number): ObsBucketEventNotificationsFilterRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketEventNotificationsFilterRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>[]

---


### ObsBucketEventNotificationsFilterRuleOutputReference <a name="ObsBucketEventNotificationsFilterRuleOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketEventNotificationsFilterRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>

---


### ObsBucketEventNotificationsList <a name="ObsBucketEventNotificationsList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketEventNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.get"></a>

```typescript
public get(index: number): ObsBucketEventNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketEventNotifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>[]

---


### ObsBucketEventNotificationsOutputReference <a name="ObsBucketEventNotificationsOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketEventNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.putFilterRule">putFilterRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetFilterRule">resetFilterRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterRule` <a name="putFilterRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.putFilterRule"></a>

```typescript
public putFilterRule(value: IResolvable | ObsBucketEventNotificationsFilterRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.putFilterRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>[]

---

##### `resetFilterRule` <a name="resetFilterRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetFilterRule"></a>

```typescript
public resetFilterRule(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRule">filterRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList">ObsBucketEventNotificationsFilterRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRuleInput">filterRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterRule`<sup>Required</sup> <a name="filterRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRule"></a>

```typescript
public readonly filterRule: ObsBucketEventNotificationsFilterRuleList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList">ObsBucketEventNotificationsFilterRuleList</a>

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `filterRuleInput`<sup>Optional</sup> <a name="filterRuleInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRuleInput"></a>

```typescript
public readonly filterRuleInput: IResolvable | ObsBucketEventNotificationsFilterRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketEventNotifications;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>

---


### ObsBucketLifecycleRuleExpirationList <a name="ObsBucketLifecycleRuleExpirationList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLifecycleRuleExpirationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.get"></a>

```typescript
public get(index: number): ObsBucketLifecycleRuleExpirationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLifecycleRuleExpiration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>[]

---


### ObsBucketLifecycleRuleExpirationOutputReference <a name="ObsBucketLifecycleRuleExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLifecycleRuleExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLifecycleRuleExpiration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>

---


### ObsBucketLifecycleRuleList <a name="ObsBucketLifecycleRuleList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLifecycleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.get"></a>

```typescript
public get(index: number): ObsBucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>[]

---


### ObsBucketLifecycleRuleNoncurrentVersionExpirationList <a name="ObsBucketLifecycleRuleNoncurrentVersionExpirationList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.get"></a>

```typescript
public get(index: number): ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLifecycleRuleNoncurrentVersionExpiration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>[]

---


### ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference <a name="ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLifecycleRuleNoncurrentVersionExpiration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>

---


### ObsBucketLifecycleRuleNoncurrentVersionTransitionList <a name="ObsBucketLifecycleRuleNoncurrentVersionTransitionList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.get"></a>

```typescript
public get(index: number): ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLifecycleRuleNoncurrentVersionTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>[]

---


### ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference <a name="ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLifecycleRuleNoncurrentVersionTransition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>

---


### ObsBucketLifecycleRuleOutputReference <a name="ObsBucketLifecycleRuleOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLifecycleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration">putNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionTransition">putNoncurrentVersionTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putTransition">putTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration">resetNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionTransition">resetNoncurrentVersionTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetTransition">resetTransition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpiration` <a name="putExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putExpiration"></a>

```typescript
public putExpiration(value: IResolvable | ObsBucketLifecycleRuleExpiration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putExpiration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>[]

---

##### `putNoncurrentVersionExpiration` <a name="putNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration"></a>

```typescript
public putNoncurrentVersionExpiration(value: IResolvable | ObsBucketLifecycleRuleNoncurrentVersionExpiration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>[]

---

##### `putNoncurrentVersionTransition` <a name="putNoncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionTransition"></a>

```typescript
public putNoncurrentVersionTransition(value: IResolvable | ObsBucketLifecycleRuleNoncurrentVersionTransition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionTransition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>[]

---

##### `putTransition` <a name="putTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putTransition"></a>

```typescript
public putTransition(value: IResolvable | ObsBucketLifecycleRuleTransition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putTransition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>[]

---

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetNoncurrentVersionExpiration` <a name="resetNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration"></a>

```typescript
public resetNoncurrentVersionExpiration(): void
```

##### `resetNoncurrentVersionTransition` <a name="resetNoncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionTransition"></a>

```typescript
public resetNoncurrentVersionTransition(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetTransition` <a name="resetTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetTransition"></a>

```typescript
public resetTransition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList">ObsBucketLifecycleRuleExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration">noncurrentVersionExpiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList">ObsBucketLifecycleRuleNoncurrentVersionExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransition">noncurrentVersionTransition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList">ObsBucketLifecycleRuleNoncurrentVersionTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList">ObsBucketLifecycleRuleTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expirationInput">expirationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput">noncurrentVersionExpirationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransitionInput">noncurrentVersionTransitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transitionInput">transitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expiration"></a>

```typescript
public readonly expiration: ObsBucketLifecycleRuleExpirationList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList">ObsBucketLifecycleRuleExpirationList</a>

---

##### `noncurrentVersionExpiration`<sup>Required</sup> <a name="noncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration"></a>

```typescript
public readonly noncurrentVersionExpiration: ObsBucketLifecycleRuleNoncurrentVersionExpirationList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList">ObsBucketLifecycleRuleNoncurrentVersionExpirationList</a>

---

##### `noncurrentVersionTransition`<sup>Required</sup> <a name="noncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransition"></a>

```typescript
public readonly noncurrentVersionTransition: ObsBucketLifecycleRuleNoncurrentVersionTransitionList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList">ObsBucketLifecycleRuleNoncurrentVersionTransitionList</a>

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transition"></a>

```typescript
public readonly transition: ObsBucketLifecycleRuleTransitionList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList">ObsBucketLifecycleRuleTransitionList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: IResolvable | ObsBucketLifecycleRuleExpiration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `noncurrentVersionExpirationInput`<sup>Optional</sup> <a name="noncurrentVersionExpirationInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput"></a>

```typescript
public readonly noncurrentVersionExpirationInput: IResolvable | ObsBucketLifecycleRuleNoncurrentVersionExpiration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>[]

---

##### `noncurrentVersionTransitionInput`<sup>Optional</sup> <a name="noncurrentVersionTransitionInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransitionInput"></a>

```typescript
public readonly noncurrentVersionTransitionInput: IResolvable | ObsBucketLifecycleRuleNoncurrentVersionTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>[]

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `transitionInput`<sup>Optional</sup> <a name="transitionInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transitionInput"></a>

```typescript
public readonly transitionInput: IResolvable | ObsBucketLifecycleRuleTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLifecycleRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>

---


### ObsBucketLifecycleRuleTransitionList <a name="ObsBucketLifecycleRuleTransitionList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLifecycleRuleTransitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.get"></a>

```typescript
public get(index: number): ObsBucketLifecycleRuleTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLifecycleRuleTransition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>[]

---


### ObsBucketLifecycleRuleTransitionOutputReference <a name="ObsBucketLifecycleRuleTransitionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLifecycleRuleTransitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.daysInput">daysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number;
```

- *Type:* number

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLifecycleRuleTransition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>

---


### ObsBucketLoggingList <a name="ObsBucketLoggingList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLoggingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.get"></a>

```typescript
public get(index: number): ObsBucketLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLogging[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>[]

---


### ObsBucketLoggingOutputReference <a name="ObsBucketLoggingOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resetTargetPrefix">resetTargetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetPrefix` <a name="resetTargetPrefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resetTargetPrefix"></a>

```typescript
public resetTargetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucketInput">targetBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefixInput">targetPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucket">targetBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefix">targetPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetBucketInput`<sup>Optional</sup> <a name="targetBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucketInput"></a>

```typescript
public readonly targetBucketInput: string;
```

- *Type:* string

---

##### `targetPrefixInput`<sup>Optional</sup> <a name="targetPrefixInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefixInput"></a>

```typescript
public readonly targetPrefixInput: string;
```

- *Type:* string

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucket"></a>

```typescript
public readonly targetBucket: string;
```

- *Type:* string

---

##### `targetPrefix`<sup>Required</sup> <a name="targetPrefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefix"></a>

```typescript
public readonly targetPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObsBucketLogging;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>

---


### ObsBucketServerSideEncryptionOutputReference <a name="ObsBucketServerSideEncryptionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketServerSideEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObsBucketServerSideEncryption;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

---


### ObsBucketWebsiteOutputReference <a name="ObsBucketWebsiteOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer"></a>

```typescript
import { obsBucket } from '@cdktf/provider-opentelekomcloud'

new obsBucket.ObsBucketWebsiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetErrorDocument">resetErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetIndexDocument">resetIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRedirectAllRequestsTo">resetRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRoutingRules">resetRoutingRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorDocument` <a name="resetErrorDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetErrorDocument"></a>

```typescript
public resetErrorDocument(): void
```

##### `resetIndexDocument` <a name="resetIndexDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetIndexDocument"></a>

```typescript
public resetIndexDocument(): void
```

##### `resetRedirectAllRequestsTo` <a name="resetRedirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRedirectAllRequestsTo"></a>

```typescript
public resetRedirectAllRequestsTo(): void
```

##### `resetRoutingRules` <a name="resetRoutingRules" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRoutingRules"></a>

```typescript
public resetRoutingRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocumentInput">errorDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocumentInput">indexDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsToInput">redirectAllRequestsToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRulesInput">routingRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocument">errorDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocument">indexDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsTo">redirectAllRequestsTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRules">routingRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorDocumentInput`<sup>Optional</sup> <a name="errorDocumentInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocumentInput"></a>

```typescript
public readonly errorDocumentInput: string;
```

- *Type:* string

---

##### `indexDocumentInput`<sup>Optional</sup> <a name="indexDocumentInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocumentInput"></a>

```typescript
public readonly indexDocumentInput: string;
```

- *Type:* string

---

##### `redirectAllRequestsToInput`<sup>Optional</sup> <a name="redirectAllRequestsToInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsToInput"></a>

```typescript
public readonly redirectAllRequestsToInput: string;
```

- *Type:* string

---

##### `routingRulesInput`<sup>Optional</sup> <a name="routingRulesInput" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRulesInput"></a>

```typescript
public readonly routingRulesInput: string;
```

- *Type:* string

---

##### `errorDocument`<sup>Required</sup> <a name="errorDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocument"></a>

```typescript
public readonly errorDocument: string;
```

- *Type:* string

---

##### `indexDocument`<sup>Required</sup> <a name="indexDocument" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocument"></a>

```typescript
public readonly indexDocument: string;
```

- *Type:* string

---

##### `redirectAllRequestsTo`<sup>Required</sup> <a name="redirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsTo"></a>

```typescript
public readonly redirectAllRequestsTo: string;
```

- *Type:* string

---

##### `routingRules`<sup>Required</sup> <a name="routingRules" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRules"></a>

```typescript
public readonly routingRules: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObsBucketWebsite;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

---



