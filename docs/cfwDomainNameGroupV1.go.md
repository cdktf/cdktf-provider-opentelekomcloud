# `cfwDomainNameGroupV1` Submodule <a name="`cfwDomainNameGroupV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwDomainNameGroupV1 <a name="CfwDomainNameGroupV1" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1 opentelekomcloud_cfw_domain_name_group_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

cfwdomainnamegroupv1.NewCfwDomainNameGroupV1(scope Construct, id *string, config CfwDomainNameGroupV1Config) CfwDomainNameGroupV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config">CfwDomainNameGroupV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config">CfwDomainNameGroupV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putDomainNames">PutDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDomainSetType">ResetDomainSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDomainNames` <a name="PutDomainNames" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putDomainNames"></a>

```go
func PutDomainNames(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putDomainNames.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putTimeouts"></a>

```go
func PutTimeouts(value CfwDomainNameGroupV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomainSetType` <a name="ResetDomainSetType" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDomainSetType"></a>

```go
func ResetDomainSetType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CfwDomainNameGroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

cfwdomainnamegroupv1.CfwDomainNameGroupV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

cfwdomainnamegroupv1.CfwDomainNameGroupV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

cfwdomainnamegroupv1.CfwDomainNameGroupV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

cfwdomainnamegroupv1.CfwDomainNameGroupV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CfwDomainNameGroupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CfwDomainNameGroupV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CfwDomainNameGroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CfwDomainNameGroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.configStatus">ConfigStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNames">DomainNames</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList">CfwDomainNameGroupV1DomainNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.refCount">RefCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList">CfwDomainNameGroupV1RulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference">CfwDomainNameGroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNamesInput">DomainNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetTypeInput">DomainSetTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallIdInput">FirewallIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetType">DomainSetType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallId">FirewallId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigStatus`<sup>Required</sup> <a name="ConfigStatus" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.configStatus"></a>

```go
func ConfigStatus() *f64
```

- *Type:* *f64

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNames"></a>

```go
func DomainNames() CfwDomainNameGroupV1DomainNamesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList">CfwDomainNameGroupV1DomainNamesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RefCount`<sup>Required</sup> <a name="RefCount" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.refCount"></a>

```go
func RefCount() *f64
```

- *Type:* *f64

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.rules"></a>

```go
func Rules() CfwDomainNameGroupV1RulesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList">CfwDomainNameGroupV1RulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeouts"></a>

```go
func Timeouts() CfwDomainNameGroupV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference">CfwDomainNameGroupV1TimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNamesInput"></a>

```go
func DomainNamesInput() interface{}
```

- *Type:* interface{}

---

##### `DomainSetTypeInput`<sup>Optional</sup> <a name="DomainSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetTypeInput"></a>

```go
func DomainSetTypeInput() *f64
```

- *Type:* *f64

---

##### `FirewallIdInput`<sup>Optional</sup> <a name="FirewallIdInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallIdInput"></a>

```go
func FirewallIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainSetType`<sup>Required</sup> <a name="DomainSetType" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetType"></a>

```go
func DomainSetType() *f64
```

- *Type:* *f64

---

##### `FirewallId`<sup>Required</sup> <a name="FirewallId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallId"></a>

```go
func FirewallId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CfwDomainNameGroupV1Config <a name="CfwDomainNameGroupV1Config" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

&cfwdomainnamegroupv1.CfwDomainNameGroupV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainNames: interface{},
	FirewallId: *string,
	Name: *string,
	ObjectId: *string,
	Description: *string,
	DomainSetType: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainNames">DomainNames</a></code> | <code>interface{}</code> | domain_names block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.firewallId">FirewallId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#firewall_id CfwDomainNameGroupV1#firewall_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#name CfwDomainNameGroupV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#object_id CfwDomainNameGroupV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainSetType">DomainSetType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#domain_set_type CfwDomainNameGroupV1#domain_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainNames"></a>

```go
DomainNames interface{}
```

- *Type:* interface{}

domain_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#domain_names CfwDomainNameGroupV1#domain_names}

---

##### `FirewallId`<sup>Required</sup> <a name="FirewallId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.firewallId"></a>

```go
FirewallId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#firewall_id CfwDomainNameGroupV1#firewall_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#name CfwDomainNameGroupV1#name}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#object_id CfwDomainNameGroupV1#object_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}.

---

##### `DomainSetType`<sup>Optional</sup> <a name="DomainSetType" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainSetType"></a>

```go
DomainSetType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#domain_set_type CfwDomainNameGroupV1#domain_set_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.timeouts"></a>

```go
Timeouts CfwDomainNameGroupV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#timeouts CfwDomainNameGroupV1#timeouts}

---

### CfwDomainNameGroupV1DomainNames <a name="CfwDomainNameGroupV1DomainNames" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

&cfwdomainnamegroupv1.CfwDomainNameGroupV1DomainNames {
	DomainName: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#domain_name CfwDomainNameGroupV1#domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#domain_name CfwDomainNameGroupV1#domain_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}.

---

### CfwDomainNameGroupV1Rules <a name="CfwDomainNameGroupV1Rules" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

&cfwdomainnamegroupv1.CfwDomainNameGroupV1Rules {

}
```


### CfwDomainNameGroupV1Timeouts <a name="CfwDomainNameGroupV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

&cfwdomainnamegroupv1.CfwDomainNameGroupV1Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#create CfwDomainNameGroupV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#delete CfwDomainNameGroupV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#update CfwDomainNameGroupV1#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#create CfwDomainNameGroupV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#delete CfwDomainNameGroupV1#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/cfw_domain_name_group_v1#update CfwDomainNameGroupV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwDomainNameGroupV1DomainNamesList <a name="CfwDomainNameGroupV1DomainNamesList" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

cfwdomainnamegroupv1.NewCfwDomainNameGroupV1DomainNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CfwDomainNameGroupV1DomainNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.get"></a>

```go
func Get(index *f64) CfwDomainNameGroupV1DomainNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CfwDomainNameGroupV1DomainNamesOutputReference <a name="CfwDomainNameGroupV1DomainNamesOutputReference" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

cfwdomainnamegroupv1.NewCfwDomainNameGroupV1DomainNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CfwDomainNameGroupV1DomainNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainAddressId">DomainAddressId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainAddressId`<sup>Required</sup> <a name="DomainAddressId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainAddressId"></a>

```go
func DomainAddressId() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CfwDomainNameGroupV1RulesList <a name="CfwDomainNameGroupV1RulesList" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

cfwdomainnamegroupv1.NewCfwDomainNameGroupV1RulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CfwDomainNameGroupV1RulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.get"></a>

```go
func Get(index *f64) CfwDomainNameGroupV1RulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CfwDomainNameGroupV1RulesOutputReference <a name="CfwDomainNameGroupV1RulesOutputReference" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

cfwdomainnamegroupv1.NewCfwDomainNameGroupV1RulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CfwDomainNameGroupV1RulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules">CfwDomainNameGroupV1Rules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.internalValue"></a>

```go
func InternalValue() CfwDomainNameGroupV1Rules
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules">CfwDomainNameGroupV1Rules</a>

---


### CfwDomainNameGroupV1TimeoutsOutputReference <a name="CfwDomainNameGroupV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/cfwdomainnamegroupv1"

cfwdomainnamegroupv1.NewCfwDomainNameGroupV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CfwDomainNameGroupV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



