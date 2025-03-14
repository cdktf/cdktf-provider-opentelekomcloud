# `wafDomainV1` Submodule <a name="`wafDomainV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDomainV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDomainV1 <a name="WafDomainV1" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1 opentelekomcloud_waf_domain_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

new wafDomainV1.WafDomainV1(scope: Construct, id: string, config: WafDomainV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config">WafDomainV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config">WafDomainV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage">putBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer">putServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetBlockPage">resetBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCipher">resetCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderList">resetSipHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderName">resetSipHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTls">resetTls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlockPage` <a name="putBlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage"></a>

```typescript
public putBlockPage(value: WafDomainV1BlockPage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

---

##### `putServer` <a name="putServer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer"></a>

```typescript
public putServer(value: IResolvable | WafDomainV1Server[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts"></a>

```typescript
public putTimeouts(value: WafDomainV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

---

##### `resetBlockPage` <a name="resetBlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetBlockPage"></a>

```typescript
public resetBlockPage(): void
```

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```

##### `resetCipher` <a name="resetCipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCipher"></a>

```typescript
public resetCipher(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

##### `resetSipHeaderList` <a name="resetSipHeaderList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderList"></a>

```typescript
public resetSipHeaderList(): void
```

##### `resetSipHeaderName` <a name="resetSipHeaderName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderName"></a>

```typescript
public resetSipHeaderName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTls"></a>

```typescript
public resetTls(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafDomainV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isConstruct"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

wafDomainV1.WafDomainV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

wafDomainV1.WafDomainV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

wafDomainV1.WafDomainV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

wafDomainV1.WafDomainV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WafDomainV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafDomainV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafDomainV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafDomainV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessCode">accessCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessStatus">accessStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPage">blockPage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference">WafDomainV1BlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cname">cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protectStatus">protectStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.server">server</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList">WafDomainV1ServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.subDomain">subDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference">WafDomainV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.txtCode">txtCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPageInput">blockPageInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipherInput">cipherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxyInput">proxyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.serverInput">serverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderListInput">sipHeaderListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderNameInput">sipHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tlsInput">tlsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipher">cipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxy">proxy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderList">sipHeaderList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderName">sipHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tls">tls</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessCode`<sup>Required</sup> <a name="accessCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessCode"></a>

```typescript
public readonly accessCode: string;
```

- *Type:* string

---

##### `accessStatus`<sup>Required</sup> <a name="accessStatus" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessStatus"></a>

```typescript
public readonly accessStatus: number;
```

- *Type:* number

---

##### `blockPage`<sup>Required</sup> <a name="blockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPage"></a>

```typescript
public readonly blockPage: WafDomainV1BlockPageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference">WafDomainV1BlockPageOutputReference</a>

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cname"></a>

```typescript
public readonly cname: string;
```

- *Type:* string

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protectStatus"></a>

```typescript
public readonly protectStatus: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.server"></a>

```typescript
public readonly server: WafDomainV1ServerList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList">WafDomainV1ServerList</a>

---

##### `subDomain`<sup>Required</sup> <a name="subDomain" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.subDomain"></a>

```typescript
public readonly subDomain: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeouts"></a>

```typescript
public readonly timeouts: WafDomainV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference">WafDomainV1TimeoutsOutputReference</a>

---

##### `txtCode`<sup>Required</sup> <a name="txtCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.txtCode"></a>

```typescript
public readonly txtCode: string;
```

- *Type:* string

---

##### `blockPageInput`<sup>Optional</sup> <a name="blockPageInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPageInput"></a>

```typescript
public readonly blockPageInput: WafDomainV1BlockPage;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `cipherInput`<sup>Optional</sup> <a name="cipherInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipherInput"></a>

```typescript
public readonly cipherInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxyInput"></a>

```typescript
public readonly proxyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.serverInput"></a>

```typescript
public readonly serverInput: IResolvable | WafDomainV1Server[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>[]

---

##### `sipHeaderListInput`<sup>Optional</sup> <a name="sipHeaderListInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderListInput"></a>

```typescript
public readonly sipHeaderListInput: string[];
```

- *Type:* string[]

---

##### `sipHeaderNameInput`<sup>Optional</sup> <a name="sipHeaderNameInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderNameInput"></a>

```typescript
public readonly sipHeaderNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WafDomainV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tlsInput"></a>

```typescript
public readonly tlsInput: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `cipher`<sup>Required</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipher"></a>

```typescript
public readonly cipher: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxy"></a>

```typescript
public readonly proxy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sipHeaderList`<sup>Required</sup> <a name="sipHeaderList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderList"></a>

```typescript
public readonly sipHeaderList: string[];
```

- *Type:* string[]

---

##### `sipHeaderName`<sup>Required</sup> <a name="sipHeaderName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderName"></a>

```typescript
public readonly sipHeaderName: string;
```

- *Type:* string

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tls"></a>

```typescript
public readonly tls: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDomainV1BlockPage <a name="WafDomainV1BlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.Initializer"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

const wafDomainV1BlockPage: wafDomainV1.WafDomainV1BlockPage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.template">template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#template WafDomainV1#template}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#content WafDomainV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#content_type WafDomainV1#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#redirect_url WafDomainV1#redirect_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#status_code WafDomainV1#status_code}. |

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#template WafDomainV1#template}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#content WafDomainV1#content}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#content_type WafDomainV1#content_type}.

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#redirect_url WafDomainV1#redirect_url}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#status_code WafDomainV1#status_code}.

---

### WafDomainV1Config <a name="WafDomainV1Config" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.Initializer"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

const wafDomainV1Config: wafDomainV1.WafDomainV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.proxy">proxy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.server">server</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>[]</code> | server block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.blockPage">blockPage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.certificateId">certificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.cipher">cipher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#id WafDomainV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderList">sipHeaderList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderName">sipHeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.tls">tls</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#tls WafDomainV1#tls}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}.

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.proxy"></a>

```typescript
public readonly proxy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.server"></a>

```typescript
public readonly server: IResolvable | WafDomainV1Server[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>[]

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#server WafDomainV1#server}

---

##### `blockPage`<sup>Optional</sup> <a name="blockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.blockPage"></a>

```typescript
public readonly blockPage: WafDomainV1BlockPage;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#block_page WafDomainV1#block_page}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}.

---

##### `cipher`<sup>Optional</sup> <a name="cipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.cipher"></a>

```typescript
public readonly cipher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#id WafDomainV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}.

---

##### `sipHeaderList`<sup>Optional</sup> <a name="sipHeaderList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderList"></a>

```typescript
public readonly sipHeaderList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}.

---

##### `sipHeaderName`<sup>Optional</sup> <a name="sipHeaderName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderName"></a>

```typescript
public readonly sipHeaderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: WafDomainV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#timeouts WafDomainV1#timeouts}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.tls"></a>

```typescript
public readonly tls: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#tls WafDomainV1#tls}.

---

### WafDomainV1Server <a name="WafDomainV1Server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.Initializer"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

const wafDomainV1Server: wafDomainV1.WafDomainV1Server = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#address WafDomainV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.port">port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#port WafDomainV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.backProtocol">backProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#back_protocol WafDomainV1#back_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.clientProtocol">clientProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#client_protocol WafDomainV1#client_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.frontProtocol">frontProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#front_protocol WafDomainV1#front_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.serverProtocol">serverProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#server_protocol WafDomainV1#server_protocol}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#address WafDomainV1#address}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#port WafDomainV1#port}.

---

##### `backProtocol`<sup>Optional</sup> <a name="backProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.backProtocol"></a>

```typescript
public readonly backProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#back_protocol WafDomainV1#back_protocol}.

---

##### `clientProtocol`<sup>Optional</sup> <a name="clientProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.clientProtocol"></a>

```typescript
public readonly clientProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#client_protocol WafDomainV1#client_protocol}.

---

##### `frontProtocol`<sup>Optional</sup> <a name="frontProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.frontProtocol"></a>

```typescript
public readonly frontProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#front_protocol WafDomainV1#front_protocol}.

---

##### `serverProtocol`<sup>Optional</sup> <a name="serverProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.serverProtocol"></a>

```typescript
public readonly serverProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#server_protocol WafDomainV1#server_protocol}.

---

### WafDomainV1Timeouts <a name="WafDomainV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.Initializer"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

const wafDomainV1Timeouts: wafDomainV1.WafDomainV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#create WafDomainV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#delete WafDomainV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#create WafDomainV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/waf_domain_v1#delete WafDomainV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDomainV1BlockPageOutputReference <a name="WafDomainV1BlockPageOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

new wafDomainV1.WafDomainV1BlockPageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetRedirectUrl"></a>

```typescript
public resetRedirectUrl(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrlInput">redirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrlInput"></a>

```typescript
public readonly redirectUrlInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafDomainV1BlockPage;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

---


### WafDomainV1ServerList <a name="WafDomainV1ServerList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

new wafDomainV1.WafDomainV1ServerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get"></a>

```typescript
public get(index: number): WafDomainV1ServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDomainV1Server[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>[]

---


### WafDomainV1ServerOutputReference <a name="WafDomainV1ServerOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

new wafDomainV1.WafDomainV1ServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetBackProtocol">resetBackProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetClientProtocol">resetClientProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetFrontProtocol">resetFrontProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetServerProtocol">resetServerProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackProtocol` <a name="resetBackProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetBackProtocol"></a>

```typescript
public resetBackProtocol(): void
```

##### `resetClientProtocol` <a name="resetClientProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetClientProtocol"></a>

```typescript
public resetClientProtocol(): void
```

##### `resetFrontProtocol` <a name="resetFrontProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetFrontProtocol"></a>

```typescript
public resetFrontProtocol(): void
```

##### `resetServerProtocol` <a name="resetServerProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetServerProtocol"></a>

```typescript
public resetServerProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocolInput">backProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocolInput">clientProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocolInput">frontProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocolInput">serverProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocol">backProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocol">clientProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocol">frontProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocol">serverProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `backProtocolInput`<sup>Optional</sup> <a name="backProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocolInput"></a>

```typescript
public readonly backProtocolInput: string;
```

- *Type:* string

---

##### `clientProtocolInput`<sup>Optional</sup> <a name="clientProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocolInput"></a>

```typescript
public readonly clientProtocolInput: string;
```

- *Type:* string

---

##### `frontProtocolInput`<sup>Optional</sup> <a name="frontProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocolInput"></a>

```typescript
public readonly frontProtocolInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `serverProtocolInput`<sup>Optional</sup> <a name="serverProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocolInput"></a>

```typescript
public readonly serverProtocolInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `backProtocol`<sup>Required</sup> <a name="backProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocol"></a>

```typescript
public readonly backProtocol: string;
```

- *Type:* string

---

##### `clientProtocol`<sup>Required</sup> <a name="clientProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocol"></a>

```typescript
public readonly clientProtocol: string;
```

- *Type:* string

---

##### `frontProtocol`<sup>Required</sup> <a name="frontProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocol"></a>

```typescript
public readonly frontProtocol: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocol"></a>

```typescript
public readonly serverProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDomainV1Server;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server">WafDomainV1Server</a>

---


### WafDomainV1TimeoutsOutputReference <a name="WafDomainV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { wafDomainV1 } from '@cdktf/provider-opentelekomcloud'

new wafDomainV1.WafDomainV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDomainV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

---



