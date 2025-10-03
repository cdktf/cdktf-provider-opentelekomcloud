# `cfwFirewallV1` Submodule <a name="`cfwFirewallV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwFirewallV1 <a name="CfwFirewallV1" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1 opentelekomcloud_cfw_firewall_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

new cfwFirewallV1.CfwFirewallV1(scope: Construct, id: string, config: CfwFirewallV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config">CfwFirewallV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config">CfwFirewallV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.putChargeInfo">putChargeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.putFlavor">putFlavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChargeInfo` <a name="putChargeInfo" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.putChargeInfo"></a>

```typescript
public putChargeInfo(value: CfwFirewallV1ChargeInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.putChargeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfo">CfwFirewallV1ChargeInfo</a>

---

##### `putFlavor` <a name="putFlavor" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.putFlavor"></a>

```typescript
public putFlavor(value: CfwFirewallV1Flavor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.putFlavor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Flavor">CfwFirewallV1Flavor</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.putTimeouts"></a>

```typescript
public putTimeouts(value: CfwFirewallV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts">CfwFirewallV1Timeouts</a>

---

##### `resetServiceType` <a name="resetServiceType" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.resetServiceType"></a>

```typescript
public resetServiceType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CfwFirewallV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.isConstruct"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

cfwFirewallV1.CfwFirewallV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.isTerraformElement"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

cfwFirewallV1.CfwFirewallV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.isTerraformResource"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

cfwFirewallV1.CfwFirewallV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.generateConfigForImport"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

cfwFirewallV1.CfwFirewallV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CfwFirewallV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CfwFirewallV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CfwFirewallV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CfwFirewallV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.chargeInfo">chargeInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference">CfwFirewallV1ChargeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.chargeMode">chargeMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.engineType">engineType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.featureToggle">featureToggle</a></code> | <code>cdktf.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.flavor">flavor</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference">CfwFirewallV1FlavorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.haType">haType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.isAvailableObs">isAvailableObs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.isOldFirewallInstance">isOldFirewallInstance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.isSupportThreatTags">isSupportThreatTags</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.protectObjects">protectObjects</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList">CfwFirewallV1ProtectObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList">CfwFirewallV1ResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.status">status</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.supportIpv6">supportIpv6</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.supportUrlFiltering">supportUrlFiltering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference">CfwFirewallV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.chargeInfoInput">chargeInfoInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfo">CfwFirewallV1ChargeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.flavorInput">flavorInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Flavor">CfwFirewallV1Flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts">CfwFirewallV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `chargeInfo`<sup>Required</sup> <a name="chargeInfo" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.chargeInfo"></a>

```typescript
public readonly chargeInfo: CfwFirewallV1ChargeInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference">CfwFirewallV1ChargeInfoOutputReference</a>

---

##### `chargeMode`<sup>Required</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.chargeMode"></a>

```typescript
public readonly chargeMode: number;
```

- *Type:* number

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.engineType"></a>

```typescript
public readonly engineType: number;
```

- *Type:* number

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.enterpriseProjectId"></a>

```typescript
public readonly enterpriseProjectId: string;
```

- *Type:* string

---

##### `featureToggle`<sup>Required</sup> <a name="featureToggle" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.featureToggle"></a>

```typescript
public readonly featureToggle: BooleanMap;
```

- *Type:* cdktf.BooleanMap

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.flavor"></a>

```typescript
public readonly flavor: CfwFirewallV1FlavorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference">CfwFirewallV1FlavorOutputReference</a>

---

##### `haType`<sup>Required</sup> <a name="haType" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.haType"></a>

```typescript
public readonly haType: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAvailableObs`<sup>Required</sup> <a name="isAvailableObs" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.isAvailableObs"></a>

```typescript
public readonly isAvailableObs: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOldFirewallInstance`<sup>Required</sup> <a name="isOldFirewallInstance" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.isOldFirewallInstance"></a>

```typescript
public readonly isOldFirewallInstance: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSupportThreatTags`<sup>Required</sup> <a name="isSupportThreatTags" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.isSupportThreatTags"></a>

```typescript
public readonly isSupportThreatTags: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `protectObjects`<sup>Required</sup> <a name="protectObjects" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.protectObjects"></a>

```typescript
public readonly protectObjects: CfwFirewallV1ProtectObjectsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList">CfwFirewallV1ProtectObjectsList</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.resources"></a>

```typescript
public readonly resources: CfwFirewallV1ResourcesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList">CfwFirewallV1ResourcesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

---

##### `supportIpv6`<sup>Required</sup> <a name="supportIpv6" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.supportIpv6"></a>

```typescript
public readonly supportIpv6: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `supportUrlFiltering`<sup>Required</sup> <a name="supportUrlFiltering" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.supportUrlFiltering"></a>

```typescript
public readonly supportUrlFiltering: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.timeouts"></a>

```typescript
public readonly timeouts: CfwFirewallV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference">CfwFirewallV1TimeoutsOutputReference</a>

---

##### `chargeInfoInput`<sup>Optional</sup> <a name="chargeInfoInput" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.chargeInfoInput"></a>

```typescript
public readonly chargeInfoInput: CfwFirewallV1ChargeInfo;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfo">CfwFirewallV1ChargeInfo</a>

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.flavorInput"></a>

```typescript
public readonly flavorInput: CfwFirewallV1Flavor;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Flavor">CfwFirewallV1Flavor</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CfwFirewallV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts">CfwFirewallV1Timeouts</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CfwFirewallV1ChargeInfo <a name="CfwFirewallV1ChargeInfo" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfo.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

const cfwFirewallV1ChargeInfo: cfwFirewallV1.CfwFirewallV1ChargeInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfo.property.chargeMode">chargeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#charge_mode CfwFirewallV1#charge_mode}. |

---

##### `chargeMode`<sup>Required</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfo.property.chargeMode"></a>

```typescript
public readonly chargeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#charge_mode CfwFirewallV1#charge_mode}.

---

### CfwFirewallV1Config <a name="CfwFirewallV1Config" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

const cfwFirewallV1Config: cfwFirewallV1.CfwFirewallV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.chargeInfo">chargeInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfo">CfwFirewallV1ChargeInfo</a></code> | charge_info block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.flavor">flavor</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Flavor">CfwFirewallV1Flavor</a></code> | flavor block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#name CfwFirewallV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.serviceType">serviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#service_type CfwFirewallV1#service_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts">CfwFirewallV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `chargeInfo`<sup>Required</sup> <a name="chargeInfo" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.chargeInfo"></a>

```typescript
public readonly chargeInfo: CfwFirewallV1ChargeInfo;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfo">CfwFirewallV1ChargeInfo</a>

charge_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#charge_info CfwFirewallV1#charge_info}

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.flavor"></a>

```typescript
public readonly flavor: CfwFirewallV1Flavor;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Flavor">CfwFirewallV1Flavor</a>

flavor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#flavor CfwFirewallV1#flavor}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#name CfwFirewallV1#name}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#service_type CfwFirewallV1#service_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: CfwFirewallV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts">CfwFirewallV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#timeouts CfwFirewallV1#timeouts}

---

### CfwFirewallV1Flavor <a name="CfwFirewallV1Flavor" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Flavor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Flavor.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

const cfwFirewallV1Flavor: cfwFirewallV1.CfwFirewallV1Flavor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Flavor.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#version CfwFirewallV1#version}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Flavor.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#version CfwFirewallV1#version}.

---

### CfwFirewallV1ProtectObjects <a name="CfwFirewallV1ProtectObjects" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjects.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

const cfwFirewallV1ProtectObjects: cfwFirewallV1.CfwFirewallV1ProtectObjects = { ... }
```


### CfwFirewallV1Resources <a name="CfwFirewallV1Resources" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Resources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Resources.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

const cfwFirewallV1Resources: cfwFirewallV1.CfwFirewallV1Resources = { ... }
```


### CfwFirewallV1Timeouts <a name="CfwFirewallV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

const cfwFirewallV1Timeouts: cfwFirewallV1.CfwFirewallV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#create CfwFirewallV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#delete CfwFirewallV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#update CfwFirewallV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#create CfwFirewallV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#delete CfwFirewallV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/cfw_firewall_v1#update CfwFirewallV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwFirewallV1ChargeInfoOutputReference <a name="CfwFirewallV1ChargeInfoOutputReference" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

new cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.property.chargeModeInput">chargeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.property.chargeMode">chargeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfo">CfwFirewallV1ChargeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chargeModeInput`<sup>Optional</sup> <a name="chargeModeInput" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.property.chargeModeInput"></a>

```typescript
public readonly chargeModeInput: string;
```

- *Type:* string

---

##### `chargeMode`<sup>Required</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.property.chargeMode"></a>

```typescript
public readonly chargeMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CfwFirewallV1ChargeInfo;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ChargeInfo">CfwFirewallV1ChargeInfo</a>

---


### CfwFirewallV1FlavorOutputReference <a name="CfwFirewallV1FlavorOutputReference" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

new cfwFirewallV1.CfwFirewallV1FlavorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.bandwidth">bandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.defaultBandwidth">defaultBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.defaultEipCount">defaultEipCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.defaultLogStorage">defaultLogStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.defaultVpcCount">defaultVpcCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.eipCount">eipCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.logStorage">logStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.versionCode">versionCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.vpcCount">vpcCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Flavor">CfwFirewallV1Flavor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

---

##### `defaultBandwidth`<sup>Required</sup> <a name="defaultBandwidth" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.defaultBandwidth"></a>

```typescript
public readonly defaultBandwidth: number;
```

- *Type:* number

---

##### `defaultEipCount`<sup>Required</sup> <a name="defaultEipCount" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.defaultEipCount"></a>

```typescript
public readonly defaultEipCount: number;
```

- *Type:* number

---

##### `defaultLogStorage`<sup>Required</sup> <a name="defaultLogStorage" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.defaultLogStorage"></a>

```typescript
public readonly defaultLogStorage: number;
```

- *Type:* number

---

##### `defaultVpcCount`<sup>Required</sup> <a name="defaultVpcCount" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.defaultVpcCount"></a>

```typescript
public readonly defaultVpcCount: number;
```

- *Type:* number

---

##### `eipCount`<sup>Required</sup> <a name="eipCount" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.eipCount"></a>

```typescript
public readonly eipCount: number;
```

- *Type:* number

---

##### `logStorage`<sup>Required</sup> <a name="logStorage" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.logStorage"></a>

```typescript
public readonly logStorage: number;
```

- *Type:* number

---

##### `versionCode`<sup>Required</sup> <a name="versionCode" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.versionCode"></a>

```typescript
public readonly versionCode: number;
```

- *Type:* number

---

##### `vpcCount`<sup>Required</sup> <a name="vpcCount" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.vpcCount"></a>

```typescript
public readonly vpcCount: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1FlavorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CfwFirewallV1Flavor;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Flavor">CfwFirewallV1Flavor</a>

---


### CfwFirewallV1ProtectObjectsList <a name="CfwFirewallV1ProtectObjectsList" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

new cfwFirewallV1.CfwFirewallV1ProtectObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.get"></a>

```typescript
public get(index: number): CfwFirewallV1ProtectObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CfwFirewallV1ProtectObjectsOutputReference <a name="CfwFirewallV1ProtectObjectsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

new cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.objectName">objectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjects">CfwFirewallV1ProtectObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CfwFirewallV1ProtectObjects;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ProtectObjects">CfwFirewallV1ProtectObjects</a>

---


### CfwFirewallV1ResourcesList <a name="CfwFirewallV1ResourcesList" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

new cfwFirewallV1.CfwFirewallV1ResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.get"></a>

```typescript
public get(index: number): CfwFirewallV1ResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CfwFirewallV1ResourcesOutputReference <a name="CfwFirewallV1ResourcesOutputReference" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

new cfwFirewallV1.CfwFirewallV1ResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.cloudServiceType">cloudServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.resourceSize">resourceSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.resourceSizeMeasureId">resourceSizeMeasureId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.resourceSpecCode">resourceSpecCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Resources">CfwFirewallV1Resources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudServiceType`<sup>Required</sup> <a name="cloudServiceType" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.cloudServiceType"></a>

```typescript
public readonly cloudServiceType: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceSize`<sup>Required</sup> <a name="resourceSize" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.resourceSize"></a>

```typescript
public readonly resourceSize: number;
```

- *Type:* number

---

##### `resourceSizeMeasureId`<sup>Required</sup> <a name="resourceSizeMeasureId" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.resourceSizeMeasureId"></a>

```typescript
public readonly resourceSizeMeasureId: number;
```

- *Type:* number

---

##### `resourceSpecCode`<sup>Required</sup> <a name="resourceSpecCode" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.resourceSpecCode"></a>

```typescript
public readonly resourceSpecCode: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1ResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CfwFirewallV1Resources;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Resources">CfwFirewallV1Resources</a>

---


### CfwFirewallV1TimeoutsOutputReference <a name="CfwFirewallV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { cfwFirewallV1 } from '@cdktf/provider-opentelekomcloud'

new cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts">CfwFirewallV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwFirewallV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwFirewallV1.CfwFirewallV1Timeouts">CfwFirewallV1Timeouts</a>

---



