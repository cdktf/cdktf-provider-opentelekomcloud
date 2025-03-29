# `dcHostedConnectV3` Submodule <a name="`dcHostedConnectV3` Submodule" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcHostedConnectV3 <a name="DcHostedConnectV3" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3 opentelekomcloud_dc_hosted_connect_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.Initializer"></a>

```typescript
import { dcHostedConnectV3 } from '@cdktf/provider-opentelekomcloud'

new dcHostedConnectV3.DcHostedConnectV3(scope: Construct, id: string, config: DcHostedConnectV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config">DcHostedConnectV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config">DcHostedConnectV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetPeerLocation">resetPeerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.putTimeouts"></a>

```typescript
public putTimeouts(value: DcHostedConnectV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts">DcHostedConnectV3Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPeerLocation` <a name="resetPeerLocation" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetPeerLocation"></a>

```typescript
public resetPeerLocation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DcHostedConnectV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.isConstruct"></a>

```typescript
import { dcHostedConnectV3 } from '@cdktf/provider-opentelekomcloud'

dcHostedConnectV3.DcHostedConnectV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.isTerraformElement"></a>

```typescript
import { dcHostedConnectV3 } from '@cdktf/provider-opentelekomcloud'

dcHostedConnectV3.DcHostedConnectV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.isTerraformResource"></a>

```typescript
import { dcHostedConnectV3 } from '@cdktf/provider-opentelekomcloud'

dcHostedConnectV3.DcHostedConnectV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.generateConfigForImport"></a>

```typescript
import { dcHostedConnectV3 } from '@cdktf/provider-opentelekomcloud'

dcHostedConnectV3.DcHostedConnectV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DcHostedConnectV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DcHostedConnectV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DcHostedConnectV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcHostedConnectV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference">DcHostedConnectV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.bandwidthInput">bandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.hostingIdInput">hostingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.peerLocationInput">peerLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.resourceTenantIdInput">resourceTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts">DcHostedConnectV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.bandwidth">bandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.hostingId">hostingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.peerLocation">peerLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.resourceTenantId">resourceTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.timeouts"></a>

```typescript
public readonly timeouts: DcHostedConnectV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference">DcHostedConnectV3TimeoutsOutputReference</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hostingIdInput`<sup>Optional</sup> <a name="hostingIdInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.hostingIdInput"></a>

```typescript
public readonly hostingIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `peerLocationInput`<sup>Optional</sup> <a name="peerLocationInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.peerLocationInput"></a>

```typescript
public readonly peerLocationInput: string;
```

- *Type:* string

---

##### `resourceTenantIdInput`<sup>Optional</sup> <a name="resourceTenantIdInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.resourceTenantIdInput"></a>

```typescript
public readonly resourceTenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DcHostedConnectV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts">DcHostedConnectV3Timeouts</a>

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hostingId`<sup>Required</sup> <a name="hostingId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.hostingId"></a>

```typescript
public readonly hostingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerLocation`<sup>Required</sup> <a name="peerLocation" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.peerLocation"></a>

```typescript
public readonly peerLocation: string;
```

- *Type:* string

---

##### `resourceTenantId`<sup>Required</sup> <a name="resourceTenantId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.resourceTenantId"></a>

```typescript
public readonly resourceTenantId: string;
```

- *Type:* string

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DcHostedConnectV3Config <a name="DcHostedConnectV3Config" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.Initializer"></a>

```typescript
import { dcHostedConnectV3 } from '@cdktf/provider-opentelekomcloud'

const dcHostedConnectV3Config: dcHostedConnectV3.DcHostedConnectV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.bandwidth">bandwidth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#bandwidth DcHostedConnectV3#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.hostingId">hostingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#hosting_id DcHostedConnectV3#hosting_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.resourceTenantId">resourceTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#resource_tenant_id DcHostedConnectV3#resource_tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.vlan">vlan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#vlan DcHostedConnectV3#vlan}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#description DcHostedConnectV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#id DcHostedConnectV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#name DcHostedConnectV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.peerLocation">peerLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#peer_location DcHostedConnectV3#peer_location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts">DcHostedConnectV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#bandwidth DcHostedConnectV3#bandwidth}.

---

##### `hostingId`<sup>Required</sup> <a name="hostingId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.hostingId"></a>

```typescript
public readonly hostingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#hosting_id DcHostedConnectV3#hosting_id}.

---

##### `resourceTenantId`<sup>Required</sup> <a name="resourceTenantId" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.resourceTenantId"></a>

```typescript
public readonly resourceTenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#resource_tenant_id DcHostedConnectV3#resource_tenant_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#vlan DcHostedConnectV3#vlan}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#description DcHostedConnectV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#id DcHostedConnectV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#name DcHostedConnectV3#name}.

---

##### `peerLocation`<sup>Optional</sup> <a name="peerLocation" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.peerLocation"></a>

```typescript
public readonly peerLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#peer_location DcHostedConnectV3#peer_location}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: DcHostedConnectV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts">DcHostedConnectV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#timeouts DcHostedConnectV3#timeouts}

---

### DcHostedConnectV3Timeouts <a name="DcHostedConnectV3Timeouts" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts.Initializer"></a>

```typescript
import { dcHostedConnectV3 } from '@cdktf/provider-opentelekomcloud'

const dcHostedConnectV3Timeouts: dcHostedConnectV3.DcHostedConnectV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#create DcHostedConnectV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#delete DcHostedConnectV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#update DcHostedConnectV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#create DcHostedConnectV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#delete DcHostedConnectV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dc_hosted_connect_v3#update DcHostedConnectV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DcHostedConnectV3TimeoutsOutputReference <a name="DcHostedConnectV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { dcHostedConnectV3 } from '@cdktf/provider-opentelekomcloud'

new dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts">DcHostedConnectV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DcHostedConnectV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dcHostedConnectV3.DcHostedConnectV3Timeouts">DcHostedConnectV3Timeouts</a>

---



