# `sfsShareAccessRulesV2` Submodule <a name="`sfsShareAccessRulesV2` Submodule" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SfsShareAccessRulesV2 <a name="SfsShareAccessRulesV2" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2 opentelekomcloud_sfs_share_access_rules_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/sfsshareaccessrulesv2"

sfsshareaccessrulesv2.NewSfsShareAccessRulesV2(scope Construct, id *string, config SfsShareAccessRulesV2Config) SfsShareAccessRulesV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config">SfsShareAccessRulesV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config">SfsShareAccessRulesV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.putAccessRule">PutAccessRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessRule` <a name="PutAccessRule" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.putAccessRule"></a>

```go
func PutAccessRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.putAccessRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SfsShareAccessRulesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/sfsshareaccessrulesv2"

sfsshareaccessrulesv2.SfsShareAccessRulesV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/sfsshareaccessrulesv2"

sfsshareaccessrulesv2.SfsShareAccessRulesV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/sfsshareaccessrulesv2"

sfsshareaccessrulesv2.SfsShareAccessRulesV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/sfsshareaccessrulesv2"

sfsshareaccessrulesv2.SfsShareAccessRulesV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SfsShareAccessRulesV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SfsShareAccessRulesV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SfsShareAccessRulesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SfsShareAccessRulesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.accessRule">AccessRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList">SfsShareAccessRulesV2AccessRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.accessRuleInput">AccessRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.shareIdInput">ShareIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.shareId">ShareId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessRule`<sup>Required</sup> <a name="AccessRule" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.accessRule"></a>

```go
func AccessRule() SfsShareAccessRulesV2AccessRuleList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList">SfsShareAccessRulesV2AccessRuleList</a>

---

##### `AccessRuleInput`<sup>Optional</sup> <a name="AccessRuleInput" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.accessRuleInput"></a>

```go
func AccessRuleInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ShareIdInput`<sup>Optional</sup> <a name="ShareIdInput" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.shareIdInput"></a>

```go
func ShareIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.shareId"></a>

```go
func ShareId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SfsShareAccessRulesV2AccessRule <a name="SfsShareAccessRulesV2AccessRule" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/sfsshareaccessrulesv2"

&sfsshareaccessrulesv2.SfsShareAccessRulesV2AccessRule {
	AccessLevel: *string,
	AccessTo: *string,
	AccessType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#access_level SfsShareAccessRulesV2#access_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessTo">AccessTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#access_to SfsShareAccessRulesV2#access_to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessType">AccessType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#access_type SfsShareAccessRulesV2#access_type}. |

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#access_level SfsShareAccessRulesV2#access_level}.

---

##### `AccessTo`<sup>Required</sup> <a name="AccessTo" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessTo"></a>

```go
AccessTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#access_to SfsShareAccessRulesV2#access_to}.

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRule.property.accessType"></a>

```go
AccessType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#access_type SfsShareAccessRulesV2#access_type}.

---

### SfsShareAccessRulesV2Config <a name="SfsShareAccessRulesV2Config" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/sfsshareaccessrulesv2"

&sfsshareaccessrulesv2.SfsShareAccessRulesV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessRule: interface{},
	ShareId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.accessRule">AccessRule</a></code> | <code>interface{}</code> | access_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.shareId">ShareId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#share_id SfsShareAccessRulesV2#share_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#id SfsShareAccessRulesV2#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessRule`<sup>Required</sup> <a name="AccessRule" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.accessRule"></a>

```go
AccessRule interface{}
```

- *Type:* interface{}

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#access_rule SfsShareAccessRulesV2#access_rule}

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.shareId"></a>

```go
ShareId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#share_id SfsShareAccessRulesV2#share_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sfs_share_access_rules_v2#id SfsShareAccessRulesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### SfsShareAccessRulesV2AccessRuleList <a name="SfsShareAccessRulesV2AccessRuleList" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/sfsshareaccessrulesv2"

sfsshareaccessrulesv2.NewSfsShareAccessRulesV2AccessRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SfsShareAccessRulesV2AccessRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.get"></a>

```go
func Get(index *f64) SfsShareAccessRulesV2AccessRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SfsShareAccessRulesV2AccessRuleOutputReference <a name="SfsShareAccessRulesV2AccessRuleOutputReference" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/sfsshareaccessrulesv2"

sfsshareaccessrulesv2.NewSfsShareAccessRulesV2AccessRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SfsShareAccessRulesV2AccessRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.resetAccessType">ResetAccessType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.resetAccessType"></a>

```go
func ResetAccessType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessRuleStatus">AccessRuleStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.shareAccessId">ShareAccessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessToInput">AccessToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessTo">AccessTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRuleStatus`<sup>Required</sup> <a name="AccessRuleStatus" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessRuleStatus"></a>

```go
func AccessRuleStatus() *string
```

- *Type:* *string

---

##### `ShareAccessId`<sup>Required</sup> <a name="ShareAccessId" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.shareAccessId"></a>

```go
func ShareAccessId() *string
```

- *Type:* *string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `AccessToInput`<sup>Optional</sup> <a name="AccessToInput" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessToInput"></a>

```go
func AccessToInput() *string
```

- *Type:* *string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessTypeInput"></a>

```go
func AccessTypeInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `AccessTo`<sup>Required</sup> <a name="AccessTo" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessTo"></a>

```go
func AccessTo() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.sfsShareAccessRulesV2.SfsShareAccessRulesV2AccessRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



